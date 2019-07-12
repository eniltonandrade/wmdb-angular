import { Movie } from 'src/app/models/movie.model';
import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TmdbService } from 'src/app/services/tmdb.service';

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

  @Input('movie') movie: Movie;

  constructor(private tmdb: TmdbService) {}

  ngOnInit() {
    this.slug = this.tmdb.convertToSlug(this.movie.title);
  }
}
