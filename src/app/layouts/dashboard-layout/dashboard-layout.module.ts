import { DashboardLayoutRoutes } from './dashboard-layout.routing';
import { DashboardComponent } from './../../pages/dashboard/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardLayoutRoutes)
  ],
  declarations: [
    DashboardComponent
  ]
})

export class DashboardLayoutModule { }
