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
  // 6 Services Minimum with direct mechanic descriptions
  services = [
    {
      index: '01',
      title: 'ENGINE OVERHAULS',
      desc: 'Complete teardown and rebuild of petrol and diesel power units. We replace gaskets, seals, and pistons to restore factory-spec cylinder compression.'
    },
    {
      index: '02',
      title: 'SUSPENSION TUNING',
      desc: 'Inboard shock adjustment, custom spring installations, and bushing replacements. We calibrate damping rates to handle rough terrain and cornering.'
    },
    {
      index: '03',
      title: 'ELECTRICAL DIAGNOSTICS',
      desc: 'OBD scans, wiring harness repairs, and battery charging circuit calibrations. We trace and resolve sensor faults using advanced oscilloscope analysis.'
    },
    {
      index: '04',
      title: 'WHEEL ALIGNMENT',
      desc: 'Precision 3D alignment, camber adjustment, and tire balancing. We align wheels to eliminate steering drift and prevent uneven tire tread wear.'
    },
    {
      index: '05',
      title: 'Aesthetic DETAILING',
      desc: 'Multi-stage paint correction, interior vacuuming, and leather preservation. We apply ceramic coatings to shield body panels from debris and dust.'
    },
    {
      index: '06',
      title: 'ROUTINE MAINTENANCE',
      desc: 'Fluid changes, filter swaps, brake pad replacements, and spark plug servicing. Six servicing bays open six days a week for quick turnaround.'
    }
  ];
}
