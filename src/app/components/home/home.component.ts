import { MovieService } from './../../services/movie.service';
import { TmdbService } from './../../services/tmdb.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  month: number = 0;
  count: number = 0;
  year: number = 0;
  constructor(private statsService: StatsService) {}

  ngOnInit() {
    this.statsService.getCountWatched().subscribe(result => {
      this.count = result.result.count;
      this.year = result.result.year;
      this.month = result.result.month;
    });
  }
}
