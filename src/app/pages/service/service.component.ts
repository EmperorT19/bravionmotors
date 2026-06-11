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
  services = [
    {
      index: '01',
      title: 'TELEMETRY CALIBRATION',
      desc: 'Full-spectrum electronic scans analyzing chassis yaw rates, suspension damping frequencies, and engine cooling loops down to millisecond resolutions.'
    },
    {
      index: '02',
      title: 'CHASSIS ALIGNMENT',
      desc: 'Eight-axis laser-guided setup adjusting caster, camber, and toe settings to dynamic corner-load curves. Precision tuned to match specific driver weights.'
    },
    {
      index: '03',
      title: 'POWER BALANCING',
      desc: 'Bespoke mechanical tuning for high-output power units. We balance rotating assemblies, refine manifold geometries, and match exhaust velocity ports.'
    }
  ];
}
