import { AccountSetupComponent } from './../../pages/auth/account-setup/account-setup.component';
import { SignupComponent } from './../../pages/auth/signup/signup.component';
import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/helpers';

export const AuthLayoutRoutes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: '',
    redirectTo: 'signup',
  },
  {
    path: 'account-setup',
    component: AccountSetupComponent,
    canActivate: [AuthGuard]
  }
]
