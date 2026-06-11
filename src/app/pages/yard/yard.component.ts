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
  // Configurator states for car colors
  activeFinishes: { [key: string]: string } = {
    'SUBARU STI': 'RAW SILV',
    'LANDCRUISER ZX': 'RAW SILV',
    'LANCER EVO': 'RAW SILV',
    'BMW M3': 'RAW SILV',
    'AMG C63': 'RAW SILV',
    'FORESTER XT': 'RAW SILV',
    'PRADO TXL': 'RAW SILV',
    'NISSAN GTR': 'RAW SILV'
  };

  selectFinish(carName: string, finish: string) {
    this.activeFinishes[carName] = finish;
  }

  // 8 Real Car Listings
  cars = [
    {
      id: '01',
      name: 'SUBARU STI',
      fullName: 'Subaru Impreza WRX STI',
      year: '2018',
      mileage: '54,000 KM',
      price: '3,900,000 KES',
      engine: '2.5L Turbo Boxer',
      transmission: '6-Speed Manual',
      drivetrain: 'Symmetrical AWD',
      desc: 'Symmetrical all-wheel drive. Stock mechanicals. Recaro bucket seats. Firm ride, absolute control.'
    },
    {
      id: '02',
      name: 'LANDCRUISER ZX',
      fullName: 'Toyota Land Cruiser V8 (ZX)',
      year: '2017',
      mileage: '78,000 KM',
      price: '13,800,000 KES',
      engine: '4.6L V8 Petrol',
      transmission: '8-Speed Automatic',
      drivetrain: 'Full-Time 4WD',
      desc: 'Triple-zone climate control. Air suspension. Solid ladder frame. Built to survive any Kenyan road.'
    },
    {
      id: '03',
      name: 'LANCER EVO',
      fullName: 'Mitsubishi Lancer Evolution X',
      year: '2015',
      mileage: '68,000 KM',
      price: '4,200,000 KES',
      engine: '2.0L Turbo MIVEC',
      transmission: 'Twin-Clutch SST',
      drivetrain: 'Super-AYC AWD',
      desc: 'Super Active Yaw Control. Brembo brake package. Recaro sports trim. Tracks like it is on rails.'
    },
    {
      id: '04',
      name: 'BMW M3',
      fullName: 'BMW M3 Sedan (F80)',
      year: '2018',
      mileage: '42,000 KM',
      price: '8,700,000 KES',
      engine: '3.0L Twin-Turbo I6',
      transmission: '7-Speed DCT',
      drivetrain: 'Rear-Wheel Drive',
      desc: 'Rear wheel drive. Active M differential. Carbon fiber roof panel. Brutal acceleration on demand.'
    },
    {
      id: '05',
      name: 'AMG C63',
      fullName: 'Mercedes-Benz C63 AMG S',
      year: '2016',
      mileage: '49,000 KM',
      price: '9,200,000 KES',
      engine: '4.0L Bi-Turbo V8',
      transmission: '7-Speed Speedshift',
      drivetrain: 'Rear-Wheel Drive',
      desc: 'Hand-assembled AMG engine. Performance exhaust system. Electronic rear differential. Aggressive sound profile.'
    },
    {
      id: '06',
      name: 'FORESTER XT',
      fullName: 'Subaru Forester (XT)',
      year: '2017',
      mileage: '82,000 KM',
      price: '2,850,000 KES',
      engine: '2.0L Turbo Boxer',
      transmission: 'Lineartronic CVT',
      drivetrain: 'Symmetrical AWD',
      desc: 'High ground clearance. Dual X-Mode drive system. Generous boot space. Fast family utility vehicle.'
    },
    {
      id: '07',
      name: 'PRADO TXL',
      fullName: 'Toyota Land Cruiser Prado TX-L',
      year: '2018',
      mileage: '61,000 KM',
      price: '7,400,000 KES',
      engine: '2.8L Turbo Diesel',
      transmission: '6-Speed Automatic',
      drivetrain: 'Full-Time 4WD',
      desc: 'Seven-seater capacity. Center locking differential. Cream leather interior. Reliable daily luxury runner.'
    },
    {
      id: '08',
      name: 'NISSAN GTR',
      fullName: 'Nissan GT-R Premium Edition',
      year: '2016',
      mileage: '31,000 KM',
      price: '14,500,000 KES',
      engine: '3.8L Twin-Turbo V6',
      transmission: '6-Speed Dual Clutch',
      drivetrain: 'Attesa E-TS AWD',
      desc: 'All-wheel drive. Attesa E-TS system. Bilstein Damptronic shocks. Hand-built engine. Serious speed.'
    }
  ];
}
