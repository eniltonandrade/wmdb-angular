import { UserService } from './../../services/user.service';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isNavbarCollapsed = true;
  user: any;
  @Input('user') currentUser: any;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userService.getUser(this.currentUser.userId).subscribe(user => {
      this.user = user;
    });
  }

  collapse() {
    this.isNavbarCollapsed = true;
  }

  onLogout() {
    this.authService.logout();
  }
}
