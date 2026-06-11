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
      desc: 'A structural carbon-monocoque chassis housing a 4.0-liter flat-plane crank twin-turbocharged V8. Utilizes dynamic dry-sump lubrication, pushrod-actuated inboard dampers, and a 3D-printed titanium rear subframe to achieve absolute torsional rigidity.',
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
      desc: 'An extreme single-seat experimental platform leveraging structural batteries and dual-motor torque vectoring. Designed with aggressive underbody Venturi tunnels, managing boundary layer suction to generate 1,200 kg of ground-effect downforce.',
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
      desc: 'A long-tail hyper-aerodynamic configuration combining a high-pressure turbocharged V6 with three electric MGU-K recovery systems. Implements active rear wings, thermal energy harvesting loops, and carbon-carbon brake discs.',
      accentColor: '#e50000'
    }
  ];
}
