import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = environment.api_url;

  constructor(private http: HttpClient) {}

  getUser(id: string) {
    const userId = +id;
    return this.http.get(`${this.API_URL}users/${userId}`);
  }
}
