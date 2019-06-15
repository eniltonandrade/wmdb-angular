import { User } from './../../models/user.model';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  user: any;
  isNavbarCollapsed = true;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.authService.getUserApp().subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
  }

  collapse() {
    this.isNavbarCollapsed = true;
  }

  onLogout() {
    this.authService.logout();
  }
}
