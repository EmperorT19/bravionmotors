import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimateDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, RouterModule, AnimateDirective],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  // 6 Services Minimum with turnaround times and short 1-line descriptions
  services = [
    {
      index: '01',
      title: 'Engine Overhauls',
      img: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=600',
      desc: 'Complete rebuild of power units to restore factory-spec cylinder compression.',
      turnaround: '3–5 days'
    },
    {
      index: '02',
      title: 'Suspension Tuning',
      img: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600',
      desc: 'Damping calibration and bushing swaps for handling harsh African terrain.',
      turnaround: '1 day'
    },
    {
      index: '03',
      title: 'Electrical Diagnostics',
      img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600',
      desc: 'OBD scans and wiring repair via professional oscilloscope analysis.',
      turnaround: '2–4 hours'
    },
    {
      index: '04',
      title: 'Wheel Alignment',
      img: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=600',
      desc: 'Precision 3D alignment and tire balancing to eliminate steering drift.',
      turnaround: '1 hour'
    },
    {
      index: '05',
      title: 'Aesthetic Detailing',
      img: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600',
      desc: 'Multi-stage paint correction, interior detailing, and ceramic coating protection.',
      turnaround: '1–2 days'
    },
    {
      index: '06',
      title: 'Routine Maintenance',
      img: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?w=600',
      desc: 'Fluid flushes, filter changes, and quick multi-point safety inspections.',
      turnaround: '2 hours'
    }
  ];
}
