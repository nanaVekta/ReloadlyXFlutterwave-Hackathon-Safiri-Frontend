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
  saleData = [
    { name: "Mar 1 - 7", value: 50000 },
    { name: "Mar 8 - 14", value: 120000 },
    { name: "Mar 15 - 21", value: 120000 },
    { name: "Mar 22 - 28", value: 120000 },
    { name: "Final wk", value: 200000 }
  ];

  costData = [
    { name: "Nigeria", value: 1000 },
    { name: "Kenya", value: 2562 },
    { name: "Ghana", value: 1500 },
    { name: "Mauritus", value: 1300 },
    { name: "Morocco", value: 500 },
    { name: "South Africa", value: 900 },
  ];

  colorScheme = {
    domain: ['#1FC406', '#C106C4', '#0692C4', '#C4060C', '#C4BE06', '#00000']
  };

  showLegend: boolean = true;
  showLabels: boolean = false;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  constructor(
    private authService: AuthService

  ) { }

  ngOnInit(): void {
    this.user = this.authService.userValue;

  }

}
