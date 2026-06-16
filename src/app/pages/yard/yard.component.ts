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
    { id: 'mercedes', name: 'Mercedes-Benz' },
    { id: 'landrover', name: 'Land Rover' },
    { id: 'volkswagen', name: 'Volkswagen' },
    { id: 'audi', name: 'Audi' }
  ];

  cars = CARS_DATA;

  setFilter(filterName: string) {
    this.selectedFilter = filterName;
  }

  get filteredCars() {
    if (this.selectedFilter === 'All') {
      return this.cars;
    }

    const filter = this.selectedFilter.toLowerCase();
    let brandFilter = filter;
    if (filter === 'mercedes-benz') {
      brandFilter = 'mercedes';
    } else if (filter === 'land rover') {
      brandFilter = 'landrover';
    }

    return this.cars.filter(car => car.brand === brandFilter);
  }

  get groupedCarsByBrand() {
    const list = this.filteredCars;
    const groups: { [key: string]: any[] } = {};
    list.forEach(car => {
      if (!groups[car.brand]) {
        groups[car.brand] = [];
      }
      groups[car.brand].push(car);
    });

    return this.brands
      .map(b => ({
        ...b,
        cars: groups[b.id] || []
      }))
      .filter(b => b.cars.length > 0);
  }
}
