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
  
  constructor(private http: HttpClient) { }

  searchMovie(query: string){
    return this.http.get(`${this.apiUrl}search/movie?api_key=${this.apiKey}${this.apiLang}&query=${query}`)
  }

  getTrending(){
    return this.http.get(`${this.apiUrl}trending/movie/day?api_key=${this.apiKey}${this.apiLang}`);   
  }

  getMovie($id:number) {
    return this.http.get(`${this.apiUrl}movie/${$id}?api_key=${this.apiKey}${this.apiLang}&append_to_response=casts`);
   }

   getPerson($id:number){
    return this.http.get(`${this.apiUrl}person/${$id}?api_key=${this.apiKey}${this.apiLang}`);
   }

   getMoviebyPerson($id:number){
     return this.http.get(`${this.apiUrl}person/${$id}/movie_credits?api_key=${this.apiKey}${this.apiLang}`);
   }

   convertToSlug(str: string) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
  }

}