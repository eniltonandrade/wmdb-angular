import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private API_URL = environment.api_url;
  constructor(private http: HttpClient) {}

  getTimeWatched() {
    return this.http.get<{ status: boolean; result: any }>(
      `${this.API_URL}stats/time`
    );
  }

  getCountWatched() {
    return this.http.get<{ status: boolean; result: any }>(
      `${this.API_URL}stats/count`
    );
  }

  getTopChartInfo() {
    return this.http.get<{ status: boolean; results: any }>(
      `${this.API_URL}stats/topChartInfo`
    );
  }
}
