import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AccountGuard, AuthGuard } from './helpers';

const routes: Routes = [
  {
    path: 'home',
    component: LandingLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/landing-layout/landing-layout.module').then(m => m.LandingLayoutModule)
    }]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
    }]
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/dashboard-layout/dashboard-layout.module').then(m => m.DashboardLayoutModule)
    }],
    canActivate: [AuthGuard, AccountGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
