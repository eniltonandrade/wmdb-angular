import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiKey = environment.TMDB.apiKey;
  private apiUrl = 'https://api.themoviedb.org/3/';
  private apiLang = '&language=pt-BR';

  constructor(private http: HttpClient) {}

  searchMovie(query: string) {
    return this.http.get(
      `${this.apiUrl}search/movie?api_key=${this.apiKey}${this.apiLang}&query=${query}`
    );
  }

  getTrending() {
    return this.http.get(
      `${this.apiUrl}trending/movie/day?api_key=${this.apiKey}${this.apiLang}`
    );
  }

  getPersonDetails(id) {
    return this.http.get(
      `${this.apiUrl}person/${id}?api_key=${this.apiKey}${
        this.apiLang
      }&append_to_response=movie_credits`
    );
  }

  getMovie($id: number) {
    return this.http.get(
      `${this.apiUrl}movie/${$id}?api_key=${this.apiKey}${
        this.apiLang
      }&append_to_response=casts`
    );
  }

  getPerson($id: number) {
    return this.http.get(
      `${this.apiUrl}person/${$id}?api_key=${this.apiKey}${this.apiLang}`
    );
  }

  getMoviebyPerson($id: number) {
    return this.http.get(
      `${this.apiUrl}person/${$id}/movie_credits?api_key=${this.apiKey}${this.apiLang}`
    );
  }

  convertToSlug(str: string) {
    return str
      .toLowerCase()
      .replace(/[àÀáÁâÂãäÄÅåª]+/g, 'a') // Special Characters #1
      .replace(/[èÈéÉêÊëË]+/g, 'e') // Special Characters #2
      .replace(/[ìÌíÍîÎïÏ]+/g, 'i') // Special Characters #3
      .replace(/[òÒóÓôÔõÕöÖº]+/g, 'o') // Special Characters #4
      .replace(/[ùÙúÚûÛüÜ]+/g, 'u') // Special Characters #5
      .replace(/[ýÝÿŸ]+/g, 'y') // Special Characters #6
      .replace(/[ñÑ]+/g, 'n') // Special Characters #7
      .replace(/[çÇ]+/g, 'c') // Special Characters #8
      .replace(/[ß]+/g, 'ss') // Special Characters #9
      .replace(/[Ææ]+/g, 'ae') // Special Characters #10
      .replace(/[Øøœ]+/g, 'oe') // Special Characters #11
      .replace(/[%]+/g, 'pct') // Special Characters #12
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
  }
}
