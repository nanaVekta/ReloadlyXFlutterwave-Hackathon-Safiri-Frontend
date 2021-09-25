import { SignupComponent } from './../../pages/auth/signup/signup.component';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AuthLayoutRoutes)
  ],
  declarations: [
    SignupComponent
  ],
})

export class AuthLayoutModule { }
