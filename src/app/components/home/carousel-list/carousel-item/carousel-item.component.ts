import { TmdbService } from './../../../../services/tmdb.service';
import { Movie } from './../../../../models/movie.model';
import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit {
  @Input('movie') movie: Movie;
  poster_url = `${environment.TMDB.images.base_url}${
    environment.TMDB.images.poster_sizes.w342
  }/`;
  slug: string;
  constructor(private tmdb: TmdbService) {}

  ngOnInit() {
    this.slug = this.tmdb.convertToSlug(this.movie.title);
  }
}
