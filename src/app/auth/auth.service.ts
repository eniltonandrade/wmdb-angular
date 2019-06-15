import { UserService } from './../services/user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private API_URL = environment.api_url;

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  constructor(
    private router: Router,
    private http: HttpClient,
    private userService: UserService
  ) {}

  login(user: User) {
    this.http
      .post<{
        status: string;
        token: string;
        expiresIn: number;
        userId: number;
      }>(`${this.API_URL}users/login`, user)
      .subscribe(response => {
        if (response.status === 'true') {
          const token = response.token;
          if (token) {
            const expiresIn = response.expiresIn;
            const userId = response.userId;
            let expiration_date = this.getExpirationTime(expiresIn);
            this.saveAuthData(token, expiration_date, userId);
            this.loggedIn.next(true);
            this.router.navigate(['/']);
          }
        }
      });
  }

  autoAuth() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.loggedIn.next(true);
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    this.clearAuthData();
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  signin(user: User) {
    return this.http.post<{ status: string; message: string }>(
      `${this.API_URL}users`,
      user
    );
  }

  getUserApp() {
    const authData = this.getAuthData();
    const userId = authData.userId;
    return this.userService.getUser(userId);
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const userId = localStorage.getItem('userId');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userId: userId
    };
  }

  private saveAuthData(token: string, expiresIn: Date, userId: number) {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId.toString());
    localStorage.setItem('expiration', expiresIn.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');
  }

  private getExpirationTime(exp: number) {
    const now = new Date();
    const expirationDate = new Date(now.getTime() + exp * 1000);
    return expirationDate;
  }
}
