import { StatsService } from 'src/app/services/stats.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  stats: any;
  constructor(private statsService: StatsService) {}

  ngOnInit() {
    this.statsService.getTopChartInfo().subscribe(result => {
      this.stats = result.results;
    });
  }
}
