import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
    FormsModule,
  ],
  template: `
  <section class="sidebar">
    <label class="sidebar-label">Filter Search</label>
    <form>
      <!-- Filter inputs -->
      <input type="text" placeholder="Search by brand :" [(ngModel)]="filterValues.brand">
      <input type="text" placeholder="Search by city :" [(ngModel)]="filterValues.city">
      <input type="text" placeholder="Search by mileage :" [(ngModel)]="filterValues.mileage">
      <div class="scroll-input">
        <label for="price-range">Filter by price:</label>
        <input type="range" id="price-range" min="500000" max="31000000" value="500000" class="price-range" [(ngModel)]="filterValues.price">
        <span class="current-price">Current price: {{ filterValues.price | number }}</span>
      </div>
    </form>
    <!-- Default button -->
    <button (click)="applyFilters()">Search</button>
  </section>
  <section class="results">
    <app-housing-location
      *ngFor="let housingLocation of filteredLocationList"
      [housingLocation]="housingLocation">
    </app-housing-location>
  </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];
  filterValues: {
    brand: string;
    city: string;
    mileage: number;
    price: number;
  } = {
    brand: '',
    city: '',
    mileage: 0,
    price: 0
  };

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  applyFilters() {
    this.filteredLocationList = this.housingLocationList.filter((housingLocation: HousingLocation) => {
      const brandMatch = housingLocation.name.toLowerCase().includes(this.filterValues.brand.toLowerCase());
      const cityMatch = housingLocation.city.toLowerCase().includes(this.filterValues.city.toLowerCase());
      const mileageMatch = housingLocation.mileage <= this.filterValues.mileage;
      const priceMatch = housingLocation.price <= this.filterValues.price;
      return brandMatch && cityMatch && mileageMatch && priceMatch;
    });
  }
}

