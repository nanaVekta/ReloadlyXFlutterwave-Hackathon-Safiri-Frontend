import { SignupComponent } from './../../pages/auth/signup/signup.component';
import { Routes } from '@angular/router';

export const AuthLayoutRoutes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: '',
    redirectTo: 'signup',
  }
]
