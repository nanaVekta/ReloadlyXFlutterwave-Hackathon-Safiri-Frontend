import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 10 ||
    document.documentElement.scrollTop > 10) {
      document.getElementById('nav').classList.add('active');
      document.getElementById('nav').classList.remove('active');
    }
  }
  name = 'Angular';
}
