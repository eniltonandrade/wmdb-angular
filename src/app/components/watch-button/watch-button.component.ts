import { MovieService } from './../../services/movie.service';
import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import * as moment from 'moment';
import 'moment/locale/pt-br';

@Component({
  selector: 'watch-button',
  templateUrl: './watch-button.component.html',
  styleUrls: ['./watch-button.component.css']
})
export class WatchbuttonComponent implements OnInit, OnDestroy, OnChanges {
  @Input('movie') movie: any;
  watched = false;
  model: NgbDateStruct;
  date: Date;
  time = { hour: 0, minute: 0 };
  response: any;
  subscription: Subscription;

  constructor(private movieService: MovieService, private calendar: NgbCalendar) {
    moment.locale('pt-BR');
  }

  ngOnInit() {
    this.model = this.calendar.getToday();
    var today = new Date();
    this.time = { hour: today.getHours(), minute: today.getMinutes() };
  }

  ngOnChanges() {
    this.movieService.getMovie(this.movie.id).subscribe(x => {
      this.response = x;
      if (this.response.status == true) {
        this.watched = true;
        this.date = this.response.datetime;
      } else {
        this.watched = false;
      }
    });
  }

  ngOnDestroy() {}

  onDateSelect() {
    this.date = new Date(
      this.model.year,
      this.model.month - 1,
      this.model.day,
      this.time.hour,
      this.time.minute
    );
    this.watched = true;
    this.movieService.setWatched(this.movie, this.date).subscribe(response => {
      this.watched = true;
    });
  }
}
