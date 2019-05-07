import { MovieService } from './../../services/movie.service';
import { TmdbService } from './../../services/tmdb.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any;

  constructor(private tmdb: TmdbService, private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getAll().subscribe(res => {
      this.movies = res;
      console.log(this.movies);
    });
  }
}
