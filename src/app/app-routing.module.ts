import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
