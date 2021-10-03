import { AuthService } from './../../../services/auth.service';
import { User } from './../../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: User;

  constructor(
    private authService: AuthService

  ) { }

  ngOnInit(): void {
    this.user = this.authService.userValue;

  }

}
