import { SearchMobileComponent } from './components/search-mobile/search-mobile.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './components/auth/login/login.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { MoviesComponent } from './components/movies/movies.component';
import { PeopleComponent } from './components/movies/people/people.component';
//canActivate: [AuthGuard]
const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'filme/:id/:slug',
    component: MovieDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pessoa/:id',
    component: PeopleComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'filmes',
    component: MoviesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'filmes/:category/',
    component: MoviesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'filmes/:category/:id',
    component: MoviesComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: SigninComponent },
  {
    path: 'pesquisar',
    component: SearchMobileComponent,
    canActivate: [AuthGuard]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
