import { UserMovies } from './userMovies.model';

export class Movie {
  id: number;
  title: string;
  original_title: string;
  tmdbId: string;
  imdbId: string;
  poster_path: string;
  backdrop_path: string;
  release_date: Date;
  vote_average: number;
  runtime: number;
  UserMovies: UserMovies;
}
