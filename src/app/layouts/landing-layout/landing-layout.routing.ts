import { PackagesComponent } from './../../pages/landing/packages/packages.component';
import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/landing/home/home.component';
import { PackageDetailsComponent } from 'src/app/pages/landing/package-details/package-details.component';

export const LandingLayoutRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'packages',
    component: PackagesComponent
  },
  {
    path: 'packages/:id',
    component: PackageDetailsComponent
  }
];
