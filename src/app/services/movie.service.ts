import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl = 'http://wmdb-backend.herokuapp.com/api/';
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.apiUrl}movies`);
  }

  getMovie(id: number) {
    return this.http.get(`${this.apiUrl}movie/${id}`);
  }

  setWatched(request: any) {
    return this.http.post(`${this.apiUrl}movie`, request, httpOptions);
  }
}
