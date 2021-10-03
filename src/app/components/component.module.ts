import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { DashHeaderComponent } from './dash-header/dash-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    DashHeaderComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DashHeaderComponent
  ]
})

export class ComponentsModule { }
