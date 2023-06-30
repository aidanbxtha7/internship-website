import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
  <main>
  <div class="panel"></div>
  <div class="content">
    <section class="listing">
    <h1 class="listing-heading" [routerLink]="['/details', housingLocation.id]">{{ housingLocation.name }}</h1>
      <img class="listing-photo" [routerLink]="['/details', housingLocation.id]" [src]="housingLocation.photo" alt="Exterior photo of {{ housingLocation.name }}">
      <div class="listing-info">
        <h2 class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</h2>
      </div>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
      <hr>
    </section>
  </div>
</main>

  `,
  styleUrls: ['./housing-location.component.css'],
})

export class HousingLocationComponent {

  @Input() housingLocation!: HousingLocation;

}