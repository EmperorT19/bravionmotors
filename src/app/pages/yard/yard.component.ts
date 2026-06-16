import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimateDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-yard',
  standalone: true,
  imports: [CommonModule, RouterModule, AnimateDirective],
  templateUrl: './yard.component.html',
  styleUrls: ['./yard.component.css']
})
export class YardComponent {
  selectedFilter = 'All';

  setFilter(filterName: string) {
    this.selectedFilter = filterName;
  }

  // 12 Real Car Listings with Exact Facts Only
  cars = [
    {
      id: '01',
      name: 'SUBARU STI',
      brand: 'subaru',
      priceVal: 3900000,
      fullName: 'Subaru Impreza WRX STI',
      year: '2018',
      mileage: '54,000 KM',
      price: '3,900,000 KES',
      engine: '2.5L Turbo Boxer',
      transmission: '6-Speed Manual',
      drivetrain: 'Symmetrical AWD',
      fuelType: 'Petrol',
      power: '305 hp',
      torque: '407 Nm',
      img: 'https://images.unsplash.com/photo-1636074641063-1c2152f1b31e?w=800',
      desc: 'Symmetrical all-wheel drive. Stock mechanicals. Recaro bucket seats. Firm ride, absolute control.'
    },
    {
      id: '02',
      name: 'LANDCRUISER ZX',
      brand: 'toyota',
      priceVal: 13800000,
      fullName: 'Toyota Land Cruiser V8 (ZX)',
      year: '2017',
      mileage: '78,000 KM',
      price: '13,800,000 KES',
      engine: '4.6L V8 Petrol',
      transmission: '8-Speed Automatic',
      drivetrain: 'Full-Time 4WD',
      fuelType: 'Petrol',
      power: '318 hp',
      torque: '460 Nm',
      img: 'https://images.unsplash.com/photo-1650530579355-7ad9d4766043?w=800',
      desc: 'Triple-zone climate control. Air suspension. Solid ladder frame. Built to survive any Kenyan road.'
    },
    {
      id: '03',
      name: 'LANCER EVO',
      brand: 'mitsubishi',
      priceVal: 4200000,
      fullName: 'Mitsubishi Lancer Evolution X',
      year: '2015',
      mileage: '68,000 KM',
      price: '4,200,000 KES',
      engine: '2.0L Turbo MIVEC',
      transmission: 'Twin-Clutch SST',
      drivetrain: 'Super-AYC AWD',
      fuelType: 'Petrol',
      power: '291 hp',
      torque: '407 Nm',
      img: 'https://images.unsplash.com/photo-1660209336030-ea4d2d0e0412?w=800',
      desc: 'Super Active Yaw Control. Brembo brake package. Recaro sports trim. Tracks like it is on rails.'
    },
    {
      id: '04',
      name: 'BMW M3',
      brand: 'bmw',
      priceVal: 8700000,
      fullName: 'BMW M3 Sedan (F80)',
      year: '2018',
      mileage: '42,000 KM',
      price: '8,700,000 KES',
      engine: '3.0L Twin-Turbo I6',
      transmission: '7-Speed DCT',
      drivetrain: 'Rear-Wheel Drive',
      fuelType: 'Petrol',
      power: '425 hp',
      torque: '550 Nm',
      img: 'https://images.unsplash.com/photo-1615644190630-c6c6f230a6ed?w=800',
      desc: 'Rear wheel drive. Active M differential. Carbon fiber roof panel. Brutal acceleration on demand.'
    },
    {
      id: '05',
      name: 'AMG G63',
      brand: 'mercedes',
      priceVal: 28500000,
      fullName: 'Mercedes-Benz G63 AMG',
      year: '2024',
      mileage: '1,200 KM',
      price: '28,500,000 KES',
      engine: '4.0L V8 Biturbo',
      transmission: '9-Speed AMG Speedshift',
      drivetrain: 'All-Wheel Drive',
      fuelType: 'Petrol',
      power: '585 hp',
      torque: '850 Nm',
      img: 'https://images.unsplash.com/photo-1648413653877-ade5eefd2f1b?w=800',
      desc: 'Hand-assembled twin-turbo V8 engine. Premium leather interior. Performance exhaust system.'
    },
    {
      id: '06',
      name: 'FORESTER XT',
      brand: 'subaru',
      priceVal: 2850000,
      fullName: 'Subaru Forester (XT)',
      year: '2017',
      mileage: '82,000 KM',
      price: '2,850,000 KES',
      engine: '2.0L Turbo Boxer',
      transmission: 'Lineartronic CVT',
      drivetrain: 'Symmetrical AWD',
      fuelType: 'Petrol',
      power: '250 hp',
      torque: '350 Nm',
      img: 'https://images.unsplash.com/photo-1722542517938-aa6a98d25235?w=800',
      desc: 'High ground clearance. Dual X-Mode drive system. Generous boot space. Fast family utility vehicle.'
    },
    {
      id: '07',
      name: 'PRADO TXL',
      brand: 'toyota',
      priceVal: 7400000,
      fullName: 'Toyota Land Cruiser Prado TX-L',
      year: '2018',
      mileage: '61,000 KM',
      price: '7,400,000 KES',
      engine: '2.8L Turbo Diesel',
      transmission: '6-Speed Automatic',
      drivetrain: 'Full-Time 4WD',
      fuelType: 'Diesel',
      power: '177 hp',
      torque: '450 Nm',
      img: 'https://images.unsplash.com/photo-1603094543704-64cdce2d2532?w=800',
      desc: 'Seven-seater capacity. Center locking differential. Cream leather interior. Reliable daily luxury runner.'
    },
    {
      id: '08',
      name: 'NISSAN GTR',
      brand: 'nissan',
      priceVal: 14500000,
      fullName: 'Nissan GT-R Premium Edition',
      year: '2016',
      mileage: '31,000 KM',
      price: '14,500,000 KES',
      engine: '3.8L Twin-Turbo V6',
      transmission: '6-Speed Dual Clutch',
      drivetrain: 'Attesa E-TS AWD',
      fuelType: 'Petrol',
      power: '565 hp',
      torque: '633 Nm',
      img: 'https://images.unsplash.com/photo-1618782657774-e5d6625a980f?w=800',
      desc: 'All-wheel drive. Attesa E-TS system. Bilstein Damptronic shocks. Hand-built engine. Serious speed.'
    },
    {
      id: '09',
      name: 'TOYOTA VITZ',
      brand: 'toyota',
      priceVal: 850000,
      fullName: 'Toyota Vitz Hatchback',
      year: '2014',
      mileage: '92,000 KM',
      price: '850,000 KES',
      engine: '1.3L 4-Cylinder',
      transmission: 'Automatic',
      drivetrain: 'FWD',
      fuelType: 'Petrol',
      power: '95 hp',
      torque: '121 Nm',
      img: 'https://images.unsplash.com/photo-1680295780545-fe606fcf6cf2?w=800',
      desc: 'Compact city hatch. Highly fuel-efficient, easy to park, and extremely reliable on fuel-guzzler routes.'
    },
    {
      id: '10',
      name: 'NISSAN NOTE',
      brand: 'nissan',
      priceVal: 780000,
      fullName: 'Nissan Note DIG-S',
      year: '2013',
      mileage: '110,000 KM',
      price: '780,000 KES',
      engine: '1.2L Supercharged',
      transmission: 'CVT',
      drivetrain: 'FWD',
      fuelType: 'Petrol',
      power: '97 hp',
      torque: '142 Nm',
      img: 'https://images.unsplash.com/photo-1609955722386-e56bad2eb2fa?w=800',
      desc: 'Supercharged daily runner. Surprisingly spacious cabin with smart mirror and collision detection features.'
    },
    {
      id: '11',
      name: 'SUBARU PLEO',
      brand: 'subaru',
      priceVal: 450000,
      fullName: 'Subaru Pleo Plus',
      year: '2012',
      mileage: '125,000 KM',
      price: '450,000 KES',
      engine: '660cc Inline-4',
      transmission: 'CVT',
      drivetrain: 'FWD',
      fuelType: 'Petrol',
      power: '49 hp',
      torque: '57 Nm',
      img: 'https://images.unsplash.com/photo-1762095214850-0b213dca1149?w=800',
      desc: 'Kei car efficiency. Ideal for narrow city streets, running errands, and absolute minimal running costs.'
    },
    {
      id: '12',
      name: 'TOYOTA BELTA',
      brand: 'toyota',
      priceVal: 480000,
      fullName: 'Toyota Belta Sedan',
      year: '2011',
      mileage: '140,000 KM',
      price: '480,000 KES',
      engine: '1.0L 3-Cylinder',
      transmission: 'Automatic',
      drivetrain: 'FWD',
      fuelType: 'Petrol',
      power: '71 hp',
      torque: '94 Nm',
      img: 'https://images.unsplash.com/photo-1596429916858-6f97b5b9cf48?w=800',
      desc: 'Reliable compact sedan. Generous boot space, soft suspension, and spare parts available in any corner of Kenya.'
    }
  ];

  get filteredCars() {
    if (this.selectedFilter === 'All') {
      return this.cars;
    }

    const filter = this.selectedFilter.toLowerCase();

    if (filter === 'under 1m') {
      return this.cars.filter(car => car.priceVal < 1000000);
    }

    if (filter === 'under 500k') {
      return this.cars.filter(car => car.priceVal < 500000);
    }

    return this.cars.filter(car => car.brand === filter);
  }
}
