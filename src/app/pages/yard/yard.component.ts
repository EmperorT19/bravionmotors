import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-yard',
  standalone: true,
  imports: [CommonModule, AnimateDirective],
  templateUrl: './yard.component.html',
  styleUrls: ['./yard.component.css']
})
export class YardComponent {
  selectedFilter = 'All';

  // Configurator states for car colors
  activeFinishes: { [key: string]: string } = {
    'SUBARU STI': 'RAW SILV',
    'LANDCRUISER ZX': 'RAW SILV',
    'LANCER EVO': 'RAW SILV',
    'BMW M3': 'RAW SILV',
    'AMG C63': 'RAW SILV',
    'FORESTER XT': 'RAW SILV',
    'PRADO TXL': 'RAW SILV',
    'NISSAN GTR': 'RAW SILV',
    'TOYOTA VITZ': 'RAW SILV',
    'NISSAN NOTE': 'RAW SILV',
    'SUBARU PLEO': 'RAW SILV',
    'TOYOTA BELTA': 'RAW SILV'
  };

  selectFinish(carName: string, finish: string) {
    this.activeFinishes[carName] = finish;
  }

  setFilter(filterName: string) {
    this.selectedFilter = filterName;
  }

  // 12 Real Car Listings
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
      img: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800',
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
      img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800',
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
      img: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800',
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
      img: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800',
      desc: 'Rear wheel drive. Active M differential. Carbon fiber roof panel. Brutal acceleration on demand.'
    },
    {
      id: '05',
      name: 'AMG C63',
      brand: 'mercedes',
      priceVal: 9200000,
      fullName: 'Mercedes-Benz C63 AMG S',
      year: '2016',
      mileage: '49,000 KM',
      price: '9,200,000 KES',
      engine: '4.0L Bi-Turbo V8',
      transmission: '7-Speed Speedshift',
      drivetrain: 'Rear-Wheel Drive',
      img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',
      desc: 'Hand-assembled AMG engine. Performance exhaust system. Electronic rear differential. Aggressive sound profile.'
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
      img: 'https://images.unsplash.com/photo-1562920841-029f9d2b3b85?w=800',
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
      img: 'https://images.unsplash.com/photo-1594568284297-7c64468f5898?w=800',
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
      img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800',
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
      img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800',
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
      img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800',
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
      img: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800',
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
      img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800',
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
