import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-parts',
  standalone: true,
  imports: [CommonModule, AnimateDirective],
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent {
  parts = [
    {
      id: '01',
      title: 'FORGED COMBUSTION ASSEMBLY',
      category: 'ENGINE DYNAMICS',
      desc: 'Bespoke high-compression pistons machined from aerospace-grade aluminum. Engineered to withstand peak cylinder pressures exceeding 220 bar.',
      specs: [
        { label: 'MATERIAL', value: 'AL-2618 FORGED' },
        { label: 'COMPRESSION', value: '12.5:1 RATIO' },
        { label: 'TOLERANCE', value: '±0.002 MM' }
      ]
    },
    {
      id: '02',
      title: 'COILOVER KINETICS SYSTEM',
      category: 'SUSPENSION DYNAMICS',
      desc: 'Double-adjustable dampers featuring valve structures calibrated for high-frequency rebound control and architectural weight transfer profiles.',
      specs: [
        { label: 'DAMPING', value: '2-WAY ADJUSTABLE' },
        { label: 'SPRING RATE', value: '120 N/MM' },
        { label: 'COATING', value: 'DIAMOND-LIKE CARBON' }
      ]
    }
  ];
}
