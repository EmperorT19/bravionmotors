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
  // Inventory models metadata
  models = [
    {
      id: '01',
      name: 'BRV-01',
      type: 'CONCEPT COUPE',
      power: '720 HP',
      weight: '1,180 KG',
      acceleration: '2.4 SEC',
      chassis: 'EXO-BONDED CARBON',
      accentColor: '#e50000'
    },
    {
      id: '02',
      name: 'BRV-02',
      type: 'MONOPOSTO TRACK',
      power: '850 HP',
      weight: '890 KG',
      acceleration: '1.9 SEC',
      chassis: 'HONEYCOMB ALUMINUM',
      accentColor: '#e50000'
    },
    {
      id: '03',
      name: 'BRV-03',
      type: 'AERODYNE HYBRID',
      power: '1020 HP',
      weight: '1,320 KG',
      acceleration: '1.6 SEC',
      chassis: 'TITANIUM-MATRIX CORES',
      accentColor: '#e50000'
    }
  ];
}
