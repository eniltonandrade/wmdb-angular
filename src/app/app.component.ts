import { User } from './models/user.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentUser: User;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.currentUser.subscribe(x => {
      this.currentUser = x;
    });
  }
}
