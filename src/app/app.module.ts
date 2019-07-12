import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavSearchBarComponent } from './components/nav-search-bar/nav-search-bar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HomeStaticsTopComponent } from './components/home/home-statics-top/home-statics-top.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import { MovieListItemComponent } from './components/movies/movie-list-item/movie-list-item.component';
import { WatchbuttonComponent } from './components/watch-button/watch-button.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { MovieCastComponent } from './components/movie-details/movie-cast/movie-cast.component';
import { HomeRecentlyWatchedComponent } from './components/home/home-recently-watched/home-recently-watched.component';
import { ChartsComponent } from './components/home/charts/charts.component';
import { Ng2OdometerModule } from 'ng2-odometer';
import { CarouselListComponent } from './components/home/carousel-list/carousel-list.component';
import { SlickModule } from 'ngx-slick';
import { TimeWatchedComponent } from './components/home/time-watched/time-watched.component';
import { CarouselItemComponent } from './components/home/carousel-list/carousel-item/carousel-item.component';
import { SearchMobileComponent } from './components/search-mobile/search-mobile.component';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { MoviesComponent } from './components/movies/movies.component';
import { MomentPipe } from './helpers/moment.pipe';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { MoviesSidebarComponent } from './components/movies/movies-sidebar/movies-sidebar.component';
import { PeopleComponent } from './components/movies/people/people.component';

registerLocaleData(localeBr, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    NavSearchBarComponent,
    NavbarComponent,
    HomeComponent,
    HomeStaticsTopComponent,
    MovieDetailsComponent,
    MovieListItemComponent,
    WatchbuttonComponent,
    LoginComponent,
    SigninComponent,
    MovieCastComponent,
    HomeRecentlyWatchedComponent,
    ChartsComponent,
    CarouselListComponent,
    TimeWatchedComponent,
    CarouselItemComponent,
    SearchMobileComponent,
    MoviesComponent,
    MomentPipe,
    MovieListComponent,
    MoviesSidebarComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    Ng2OdometerModule.forRoot(),
    SlickModule.forRoot()
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
