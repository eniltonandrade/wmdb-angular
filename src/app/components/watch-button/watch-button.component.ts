import { MovieService } from './../../services/movie.service';
import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

@Component({
  selector: 'watch-button',
  templateUrl: './watch-button.component.html',
  styleUrls: ['./watch-button.component.css']
})
export class WatchbuttonComponent implements OnInit, OnDestroy, OnChanges {
  @Input('movie') movie: any;
  watched = false;
  model: NgbDateStruct;
  date: any;
  response: any;
  subscription: Subscription;

  constructor(
    private movieService: MovieService,
    private calendar: NgbCalendar
  ) {}

  ngOnInit() {
    this.model = this.calendar.getToday();
  }

  ngOnChanges() {
    console.log(this.movie.id);

    this.subscription = this.movieService
      .getMovie(this.movie.id)
      .subscribe(x => {
        this.response = x;
        if (this.response.code == '200') {
          this.watched = true;
          this.date = this.response.datetime;
        } else {
          this.watched = false;
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDateSelect() {
    this.date = new Date(this.model.year, this.model.month, this.model.day);

    let castArray = [];
    let crewArray = [];

    castArray = this.movie.casts.cast.map(cast => {
      return {
        tmdbId: cast.id,
        name: cast.name,
        profile_path: cast.profile_path,
        gender: cast.gender,
        character: cast.character,
        order: cast.order
      };
    });

    crewArray = this.movie.casts.crew.map(crew => {
      return {
        department: crew.department,
        gender: crew.gender,
        tmdbId: crew.id,
        job: crew.job,
        name: crew.name,
        profile_path: crew.profile_path
      };
    });

    console.log(castArray);
    console.log(crewArray);

    this.watched = true;
    let request = {
      id: this.movie.id,
      imdb_id: this.movie.imdb_id,
      title: this.movie.title,
      original_title: this.movie.original_title,
      poster_path: this.movie.poster_path,
      release_date: this.movie.release_date,
      overview: this.movie.overview,
      vote_average: this.movie.vote_average,
      runtime: this.movie.runtime,
      genres: this.movie.genres,
      crew: this.movie.casts.crew.filter(x => x.job == 'Director'),
      cast: this.movie.casts.cast,
      datetime: this.date.toLocaleString()
    };
    console.log(request);
    this.movieService.setWatched(request).subscribe(response => {
      console.log(response);
      this.watched = true;
    });
  }
}
