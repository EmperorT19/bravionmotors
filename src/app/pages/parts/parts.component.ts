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
      title: 'Performance brake pads',
      category: 'Brake pads',
      desc: 'Bespoke carbon-ceramic compounds designed for high-thermal dissipation and zero brake fade under extreme conditions.',
      img: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80',
      specs: [
        { label: 'Material', value: 'Carbon-ceramic' },
        { label: 'Operating temperature', value: 'Up to 800°C' },
        { label: 'Friction coefficient', value: '0.45µ' }
      ]
    },
    {
      id: '02',
      title: 'Forged alloy rims',
      category: 'Alloy rims',
      desc: 'Ultra-lightweight multi-spoke monoblock forged aluminum rims that reduce unsprung mass and improve steering response.',
      img: 'https://images.unsplash.com/photo-1611245089332-9df7be12d09f?auto=format&fit=crop&w=800&q=80',
      specs: [
        { label: 'Process', value: 'Monoblock forged' },
        { label: 'Weight', value: '8.2 kg per wheel' },
        { label: 'Material', value: '6061-T6 aluminum' }
      ]
    },
    {
      id: '03',
      title: 'High-flow oil filter',
      category: 'Oil filter',
      desc: 'Synthetic micro-glass media designed to filter down to 10 microns while maintaining high flow rates for engine protection.',
      img: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
      specs: [
        { label: 'Filtration efficiency', value: '99% at 10 microns' },
        { label: 'Housing material', value: 'Heavy-gauge steel' },
        { label: 'Bypass valve', value: '2.5 bar setting' }
      ]
    }
  ];
}
