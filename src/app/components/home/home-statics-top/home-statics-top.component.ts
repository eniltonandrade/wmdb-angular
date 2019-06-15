import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'home-statics-top',
  templateUrl: './home-statics-top.component.html',
  styleUrls: ['./home-statics-top.component.css']
})
export class HomeStaticsTopComponent implements OnInit {
  month: number = 0;
  count: number = 0;
  year: number = 0;
  constructor(private statsService: StatsService) {}

  ngOnInit() {
    this.statsService.getCountWatched().subscribe(result => {
      this.count = result.result.count;
      this.year = result.result.year;
      this.month = result.result.month;
    });
  }
}
