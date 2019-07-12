import { Movie } from './../../models/movie.model';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  orderedMovies: Movie[];
  genres: any;
  years: any;
  companies: any;
  movieCount: number;
  category: string;
  order: string;
  dir: string;
  id: number;
  pageSize = 16;
  page = 1;

  constructor(private movieService: MovieService, private route: ActivatedRoute) {
    moment.locale('pt-BR');
  }

  ngOnInit() {
    this.movieService.getList(5000).subscribe(result => {
      this.movies = result.data.movies;
      this.movieCount = result.data.count;
    });
  }

  onFilterChange(value: any) {
    if (value == 'rating') {
      this.orderedMovies = this.movies.sort((a, b) => {
        return b.vote_average - a.vote_average;
      });
    } else if (value == 'title-asc') {
      this.orderedMovies = this.movies.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        if (titleA > titleB) {
          return 1;
        }
        if (titleA < titleB) {
          return -1;
        }
        return 0;
      });
    } else if (value == 'title-desc') {
      this.orderedMovies = this.movies.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        if (titleA > titleB) return -1;
        if (titleA < titleB) return 1;
        return 0;
      });
    } else if (value == 'watch-date') {
      this.orderedMovies = this.movies.sort((a, b) => {
        var dateA = new Date(b.UserMovies.watchedAt).valueOf(),
          dateB = new Date(a.UserMovies.watchedAt).valueOf();
        return dateA - dateB;
      });
    }

    this.movies = this.orderedMovies;
  }
}
