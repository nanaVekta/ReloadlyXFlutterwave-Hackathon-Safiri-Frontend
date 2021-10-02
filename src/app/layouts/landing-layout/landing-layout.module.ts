import { PackagesComponent } from './../../pages/landing/packages/packages.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from 'src/app/pages/landing/home/home.component';
import { LandingLayoutRoutes } from './landing-layout.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LandingLayoutRoutes)
  ],
  declarations: [
    HomeComponent,
    PackagesComponent
  ]
})

export class LandingLayoutModule { }
