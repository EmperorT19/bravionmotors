import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, AnimateDirective],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  // 6 Services Minimum with direct mechanic descriptions & Unsplash headers
  services = [
    {
      index: '01',
      title: 'ENGINE OVERHAULS',
      img: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=600',
      desc: 'Complete teardown and rebuild of petrol and diesel power units. We replace gaskets, seals, and pistons to restore factory-spec cylinder compression.'
    },
    {
      index: '02',
      title: 'SUSPENSION TUNING',
      img: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600',
      desc: 'Inboard shock adjustment, custom spring installations, and bushing replacements. We calibrate damping rates to handle rough terrain and cornering.'
    },
    {
      index: '03',
      title: 'ELECTRICAL DIAGNOSTICS',
      img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600',
      desc: 'OBD scans, wiring harness repairs, and battery charging circuit calibrations. We trace and resolve sensor faults using advanced oscilloscope analysis.'
    },
    {
      index: '04',
      title: 'WHEEL ALIGNMENT',
      img: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=600',
      desc: 'Precision 3D alignment, camber adjustment, and tire balancing. We align wheels to eliminate steering drift and prevent uneven tire tread wear.'
    },
    {
      index: '05',
      title: 'Aesthetic DETAILING',
      img: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600',
      desc: 'Multi-stage paint correction, interior vacuuming, and leather preservation. We apply ceramic coatings to shield body panels from debris and dust.'
    },
    {
      index: '06',
      title: 'ROUTINE MAINTENANCE',
      img: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?w=600',
      desc: 'Fluid changes, filter swaps, brake pad replacements, and spark plug servicing. Six servicing bays open six days a week for quick turnaround.'
    }
  ];
}
