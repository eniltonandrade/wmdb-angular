import { Component, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search-mobile',
  templateUrl: './search-mobile.component.html',
  styleUrls: ['./search-mobile.component.css']
})
export class SearchMobileComponent implements OnInit {
  query: string;
  data: any;
  results: any[] = [];
  hasResults = false;
  poster_url = `${environment.TMDB.images.base_url}${
    environment.TMDB.images.backdrop_sizes.w780
  }/`;

  constructor(private tmdb: TmdbService) {}

  ngOnInit() {}

  searchMovie() {
    if (this.query.length > 3) {
      this.tmdb.searchMovie(this.query).subscribe(x => {
        this.data = x;
        this.results = this.data.results;
        this.hasResults = true;
        console.log(this.results.length);
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
