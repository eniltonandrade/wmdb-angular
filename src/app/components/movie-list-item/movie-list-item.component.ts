import { Movie } from '../../models/movie.model';
import { TmdbService } from './../../services/tmdb.service';
import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {
  poster_url = `${environment.TMDB.images.base_url}${
    environment.TMDB.images.poster_sizes.w342
  }/`;
  slug: string;
  whole = 0;
  decimal = 0;

  @Input('movie') movie: Movie;

  constructor(private tmdb: TmdbService) {}

  ngOnInit() {
    this.slug = this.tmdb.convertToSlug(this.movie.title);
    this.whole = Math.floor(this.movie.vote_average);
    this.decimal = this.whole - this.movie.vote_average;
  }
}
