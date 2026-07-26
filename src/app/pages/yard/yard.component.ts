import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimateDirective } from '../../directives/animate-on-scroll.directive';
import { CARS_DATA } from './cars-data';

@Component({
  selector: 'app-yard',
  standalone: true,
  imports: [CommonModule, RouterModule, AnimateDirective],
  templateUrl: './yard.component.html',
  styleUrls: ['./yard.component.css']
})
export class YardComponent {
  selectedFilter = 'All';

  brands = [
    { id: 'subaru', name: 'Subaru' },
    { id: 'toyota', name: 'Toyota' },
    { id: 'mitsubishi', name: 'Mitsubishi' },
    { id: 'nissan', name: 'Nissan' },
    { id: 'bmw', name: 'BMW' },
    { id: 'mercedes', name: 'Mercedes' },
    { id: 'landrover', name: 'Land Rover' },
    { id: 'volkswagen', name: 'Volkswagen' },
    { id: 'audi', name: 'Audi' },
    { id: 'porsche', name: 'Porsche' },
    { id: 'jeep', name: 'Jeep' },
    { id: 'lexus', name: 'Lexus' },
    { id: 'lamborghini', name: 'Lamborghini' },
    { id: 'bentley', name: 'Bentley' },
    { id: 'ferrari', name: 'Ferrari' }
  ];

  cars = CARS_DATA;

  setFilter(filterName: string) {
    const norm = (filterName || '').toLowerCase().trim();
    if (norm === 'mercedes' || norm === 'mercedes benz' || norm === 'mercedes-benz' || norm === 'mercedesbenz') {
      this.selectedFilter = 'Mercedes';
    } else if (norm === 'land rover' || norm === 'landrover') {
      this.selectedFilter = 'Land Rover';
    } else {
      this.selectedFilter = filterName;
    }
  }

  onFilterTouch(event: Event, filterName: string) {
    this.setFilter(filterName);
  }

  get filteredCars() {
    if (this.selectedFilter === 'All') {
      return this.cars;
    }

    const filter = this.selectedFilter.toLowerCase().trim();
    let brandFilter = filter;
    if (filter === 'mercedes-benz' || filter === 'mercedes benz' || filter === 'mercedes' || filter === 'mercedesbenz') {
      brandFilter = 'mercedes';
    } else if (filter === 'land rover' || filter === 'landrover') {
      brandFilter = 'landrover';
    }

    return this.cars.filter(car => car.brand === brandFilter || (brandFilter === 'mercedes' && car.brand === 'mercedes-benz'));
  }

  get groupedCarsByBrand() {
    const list = this.filteredCars;
    const groups: { [key: string]: any[] } = {};
    list.forEach(car => {
      const key = (car.brand === 'mercedes-benz' || car.brand === 'mercedes') ? 'mercedes' : car.brand;
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(car);
    });

    return this.brands
      .map(b => ({
        ...b,
        cars: groups[b.id] || []
      }))
      .filter(b => b.cars.length > 0);
  }
}
