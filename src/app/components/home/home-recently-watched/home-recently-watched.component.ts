import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-recently-watched',
  templateUrl: './home-recently-watched.component.html',
  styleUrls: ['./home-recently-watched.component.css']
})
export class HomeRecentlyWatchedComponent implements OnInit {
  score = 8.0;
  movies = [
    {
      title: 'Homem de Ferro 3',
      poster_path:
        'http://image.tmdb.org/t/p/w185/r26iZ9d09TtAOjKpSDEJhFXsZ2w.jpg',
      vote_average: 6.9,
      watchedAt: '26 de Maio de 2019'
    },
    {
      title: 'Homem de Ferro',
      poster_path:
        'http://image.tmdb.org/t/p/w185/gosbkLZforgtlogcl8enFGKxZLm.jpg',
      vote_average: 6.8,
      watchedAt: '24 de Maio de 2019'
    },
    {
      title: 'Homem de Ferro',
      poster_path:
        'http://image.tmdb.org/t/p/w185/gosbkLZforgtlogcl8enFGKxZLm.jpg',
      vote_average: 7.5,
      watchedAt: '23 de Maio de 2019'
    },
    {
      title: 'Homem de Ferro 3',
      poster_path:
        'http://image.tmdb.org/t/p/w185/r26iZ9d09TtAOjKpSDEJhFXsZ2w.jpg',
      vote_average: 6.9,
      watchedAt: '26 de Maio de 2019'
    },
    {
      title: 'Homem de Ferro',
      poster_path:
        'http://image.tmdb.org/t/p/w185/gosbkLZforgtlogcl8enFGKxZLm.jpg',
      vote_average: 7.5,
      watchedAt: '23 de Maio de 2019'
    },
    {
      title: 'Homem de Ferro 3',
      poster_path:
        'http://image.tmdb.org/t/p/w185/r26iZ9d09TtAOjKpSDEJhFXsZ2w.jpg',
      vote_average: 6.9,
      watchedAt: '26 de Maio de 2019'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
