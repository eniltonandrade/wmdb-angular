import { Movie } from 'src/app/models/movie.model';
import { MovieService } from './../../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./../movies.component.css']
})
export class PeopleComponent implements OnInit {
  constructor(private movieSevice: MovieService, private route: ActivatedRoute) {}
  movies: Movie[];
  orderedMovies: Movie[];
  personDetails: any;
  movieCount: number;
  pageSize = 16;
  page = 1;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const tmdbId = +params.get('id');

      this.movieSevice.getMoviesByPerson(tmdbId).subscribe(response => {
        this.personDetails = response;
      });

      this.movieSevice.getMoviesByPerson(tmdbId).subscribe(response => {
        this.movies = response.data.movies;
        this.movieCount = response.data.count;
      });
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
