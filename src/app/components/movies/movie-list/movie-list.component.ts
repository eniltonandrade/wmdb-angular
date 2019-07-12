import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() movies: Movie[];
  @Input() movieCount: number;
  orderedMovies: Movie[];
  pageSize = 16;
  page = 1;
  constructor() {}

  ngOnInit() {}
}
