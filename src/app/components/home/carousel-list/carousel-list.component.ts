import { MovieService } from './../../../services/movie.service';
import { Movie } from './../../../models/movie.model';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/pt-br';

@Component({
  selector: 'home-carousel-list',
  templateUrl: './carousel-list.component.html',
  styleUrls: ['./carousel-list.component.css']
})
export class CarouselListComponent implements OnInit {
  slideConfig = {
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    variableWidth: true
  };

  movies: Movie[];

  constructor(private movieService: MovieService) {
    moment.locale('pt-BR');
  }

  ngOnInit() {
    this.movieService.getRecentMovies().subscribe(result => {
      this.movies = result.data.movies;
    });
  }
}
