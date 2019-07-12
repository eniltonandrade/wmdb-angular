import { Observable } from 'rxjs';
import { MovieService } from './../../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs/operators';

@Component({
  selector: 'movies-sidebar',
  templateUrl: './movies-sidebar.component.html',
  styleUrls: ['./movies-sidebar.component.css']
})
export class MoviesSidebarComponent implements OnInit {
  genres: any;
  years: any;
  companies: any;
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getGenres().subscribe(result => {
      this.genres = result.data.movies;
    });

    this.movieService.getYearsRelease().subscribe(result => {
      this.years = result.data;
    });

    this.movieService.getCompanies().subscribe(result => {
      this.companies = result.data.companies.splice(0, 10);
    });
  }
}
