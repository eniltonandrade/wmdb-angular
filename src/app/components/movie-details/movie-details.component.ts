import { ImdbService } from './../../services/imdb.service';
import { TmdbService } from './../../services/tmdb.service';
import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  casts = [];
  imdbScore: number;
  castsMore = [];
  isCollapsed: false;
  crew = [];
  producers = [];
  writers = [];
  directors = [];
  imgBaseUrl = `${environment.TMDB.images.base_url}${
    environment.TMDB.images.poster_sizes.w500
  }/`;

  posterUrl: string;
  movieID: number;
  movie: any;
  isLoading: boolean = true;
  imgPlaceHolder = 'http://via.placeholder.com/154x218?text=Not+avaliable';
  model: NgbDateStruct;
  date: any;

  constructor(
    private route: ActivatedRoute,
    private tmdbService: TmdbService,
    private imdbService: ImdbService,
    private calendar: NgbCalendar
  ) {
    //Get parameters from
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.movieID = +params.get('id');
      this.tmdbService.getMovie(this.movieID).subscribe(movies => {
        this.movie = movies;
        this.isLoading = false;
        this.directors = this.movie.casts.crew.filter(x => x.job == 'Director');
        this.producers = this.movie.casts.crew.filter(x => x.job == 'Producer');
        this.writers = this.movie.casts.crew.filter(x => x.job == 'Screenplay');
        this.casts = this.movie.casts.cast;
        this.posterUrl = this.movie.poster_path
          ? this.imgBaseUrl + this.movie.poster_path
          : this.imgPlaceHolder;
        this.imdbService.getScore(this.movie.imdb_id).subscribe(imdbData => {
          if (imdbData.imdbRating == 'N/A') {
            this.movie.imdbScore = this.movie.vote_average;
          } else {
            this.movie.imdbScore = imdbData.imdbRating;
          }
        });
      });
    });
    this.model = this.calendar.getToday();
  }
}
