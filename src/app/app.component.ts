import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterLink,
    RouterOutlet,
  ],
  template: `
  <main>
  <a [routerLink]="['/']" style="text-decoration: none;">
    <header class="brand-name">
      <h1 class="heading" style="text-decoration: none;">Autoluxe</h1>
      <img class="brand-logo" src="/assets/aave-aave-logo.svg" alt="logo" aria-hidden="true">
    </header>
  </a>
  <section class="content">
    <router-outlet></router-outlet>
  </section>
</main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
