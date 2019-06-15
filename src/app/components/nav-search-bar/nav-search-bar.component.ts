import { TmdbService } from './../../services/tmdb.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'nav-search-bar',
  templateUrl: './nav-search-bar.component.html',
  styleUrls: ['./nav-search-bar.component.css']
})
export class NavSearchBarComponent {
  query: string;
  data: any;
  results: any;
  hasResults = false;
  poster_url = `${environment.TMDB.images.base_url}${
    environment.TMDB.images.poster_sizes.w154
  }/`;

  constructor(private tmdb: TmdbService) {}

  searchMovie() {
    if (this.query.length > 3) {
      this.tmdb.searchMovie(this.query).subscribe(x => {
        this.data = x;
        this.results = this.data.results;
        this.hasResults = true;
      });
    } else {
      this.hasResults = false;
    }
  }

  clearResults() {
    this.hasResults = false;
    this.query = '';
  }

  getSlug(title: string) {
    return this.tmdb.convertToSlug(title);
  }
}
