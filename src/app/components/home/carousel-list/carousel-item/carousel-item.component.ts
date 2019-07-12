import { TmdbService } from './../../../../services/tmdb.service';
import { Movie } from './../../../../models/movie.model';
import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import 'moment/locale/pt-br';

@Component({
  selector: 'carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit {
  @Input('movie') movie: Movie;
  date;
  poster_url = `${environment.TMDB.images.base_url}${
    environment.TMDB.images.poster_sizes.w342
  }/`;
  slug: string;
  constructor(private tmdb: TmdbService) {}

  ngOnInit() {
    this.slug = this.tmdb.convertToSlug(this.movie.title);
    moment.locale('pt-BR');
    this.date = moment(this.movie.UserMovies.watchedAt)
      .startOf('hour')
      .fromNow();
  }
}
