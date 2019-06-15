import { StatsService } from './../../../services/stats.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-time-watched',
  templateUrl: './time-watched.component.html',
  styleUrls: ['./time-watched.component.css']
})
export class TimeWatchedComponent implements OnInit {
  stats: any;
  constructor(private statsService: StatsService) {}

  ngOnInit() {
    this.statsService.getTimeWatched().subscribe(result => {
      this.stats = result.result;
    });
  }
}
