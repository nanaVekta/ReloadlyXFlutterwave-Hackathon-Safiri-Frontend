import { DashboardLayoutRoutes } from './dashboard-layout.routing';
import { DashboardComponent } from './../../pages/dashboard/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardLayoutRoutes),
    NgxChartsModule
  ],
  declarations: [
    DashboardComponent
  ]
})

export class DashboardLayoutModule { }
