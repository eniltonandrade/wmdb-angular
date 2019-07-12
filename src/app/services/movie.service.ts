import { Movie } from './../models/movie.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private API_URL = environment.api_url;
  constructor(private http: HttpClient) {}

  getList(limit: number) {
    return this.http.get<{ status: boolean; data: any }>(
      `${this.API_URL}movies?limit=${limit}`
    );
  }

  getMoviesByPerson(tmdbId) {
    return this.http.get<{ status: boolean; data: any }>(
      `${this.API_URL}people/${tmdbId}`
    );
  }
  getYearsRelease() {
    return this.http.get<{ status: boolean; data: any }>(`${this.API_URL}movies/years`);
  }

  getCompanies() {
    return this.http.get<{ status: boolean; data: any }>(`${this.API_URL}companies`);
  }

  getGenres() {
    return this.http.get<{ status: boolean; data: any }>(`${this.API_URL}genres`);
  }

  getMovie(id: number) {
    return this.http.get<{ status: boolean; data: any }>(`${this.API_URL}movies/${id}`);
  }

  getRecentMovies() {
    return this.http.get<{ status: boolean; data: any }>(
      `${this.API_URL}movies?limit=10&order=time&dir=desc`
    );
  }

  setWatched(movie: any, date: any) {
    let castArray = [];
    let directorsArray = [];
    let genresArray = [];
    let companiesArray = [];

    genresArray = movie.genres.map(genres => {
      return {
        tmdbId: genres.id,
        name: genres.name
      };
    });

    companiesArray = movie.production_companies.map(company => {
      return {
        tmdbId: company.id,
        name: company.name,
        logo_path: company.logo_path
      };
    });

    castArray = movie.casts.cast.map(cast => {
      return {
        tmdbId: cast.id,
        name: cast.name,
        profile_path: cast.profile_path,
        gender: cast.gender,
        character: cast.character,
        order: cast.order
      };
    });

    directorsArray = movie.casts.crew
      .filter(x => {
        return x.job === 'Director';
      })
      .map(director => {
        return {
          gender: director.gender,
          tmdbId: director.id,
          name: director.name,
          profile_path: director.profile_path
        };
      });

    let request = {
      tmdbId: movie.id,
      imdbId: movie.imdb_id,
      title: movie.title,
      original_title: movie.original_title,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      backdrop_path: movie.backdrop_path,
      vote_average: movie.imdbScore,
      runtime: movie.runtime,
      watchedAt: date.toLocaleString(),
      companies: companiesArray,
      user: [1],
      genres: genresArray,
      directors: directorsArray,
      cast: castArray
    };

    return this.http.post(this.API_URL + 'movies', request, httpOptions);
  }
}
