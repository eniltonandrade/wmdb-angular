import { TmdbService } from './../../services/tmdb.service';
import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  casts = [];
  crew = [];
  producers = [];
  writers = [];
  isLike: boolean;
  directors = [];
  imgBaseUrl = 'https://image.tmdb.org/t/p/w342';
  posterUrl: string;
  movieID: number;
  movie: any;
  watched: boolean;
  ShowSpinner: boolean = true;
  ShowContent: boolean = false;
  imgPlaceHolder = 'http://via.placeholder.com/154x218?text=Not+avaliable';
  model: NgbDateStruct;
  date: any;

  constructor(
    private route: ActivatedRoute,
    private tmdbService: TmdbService,
    private calendar: NgbCalendar
  ) {
    //Get parameters from
    this.route.paramMap.subscribe(params => {
      this.movieID = +params.get('id');
      this.tmdbService.getMovie(this.movieID).subscribe(movies => {
        this.movie = movies;
        this.ShowSpinner = false;
        this.ShowContent = true;
        this.isLike = false;
        this.directors = this.movie.casts.crew.filter(x => x.job == 'Director');
        this.producers = this.movie.casts.crew.filter(x => x.job == 'Producer');
        this.writers = this.movie.casts.crew.filter(x => x.job == 'Screenplay');
        this.posterUrl = this.movie.poster_path
          ? this.imgBaseUrl + this.movie.poster_path
          : this.imgPlaceHolder;
      });
    });
  }

  ngOnInit() {
    this.model = this.calendar.getToday();
  }
}
