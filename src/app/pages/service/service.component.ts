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
  services = [
    {
      index: '01',
      title: 'Engine Overhauls',
      img: 'https://picsum.photos/seed/engine-overhaul/800/600',
      desc: 'Complete rebuild of power units to restore factory-spec cylinder compression.',
      turnaround: '3–5 days'
    },
    {
      index: '02',
      title: 'Suspension Tuning',
      img: 'https://picsum.photos/seed/suspension-tuning/800/600',
      desc: 'Damping calibration and bushing swaps for African road compliance.',
      turnaround: '1 day'
    },
    {
      index: '03',
      title: 'Electrical Diagnostics',
      img: 'https://picsum.photos/seed/electrical-diagnostics/800/600',
      desc: 'OBD scans and wiring repair via professional oscilloscope analysis.',
      turnaround: '2–4 hours'
    },
    {
      index: '04',
      title: 'Wheel Alignment',
      img: 'https://picsum.photos/seed/wheel-alignment/800/600',
      desc: 'Precision 3D alignment and tire balancing to eliminate steering drift.',
      turnaround: '1 hour'
    },
    {
      index: '05',
      title: 'Aesthetic Detailing',
      img: 'https://picsum.photos/seed/aesthetic-detailing/800/600',
      desc: 'Multi-stage paint correction, interior detailing, and ceramic coating protection.',
      turnaround: '1–2 days'
    },
    {
      index: '06',
      title: 'Routine Maintenance',
      img: 'https://picsum.photos/seed/routine-maintenance/800/600',
      desc: 'Fluid flushes, filter changes, and quick multi-point safety inspections.',
      turnaround: '2 hours'
    },
    {
      index: '07',
      title: 'Brake System Service',
      img: 'https://picsum.photos/seed/brake-service/800/600',
      desc: 'Pad replacement, rotor resurfacing, and fluid bleeding for reliable stopping power.',
      turnaround: '2–3 hours'
    },
    {
      index: '08',
      title: 'Transmission Repair',
      img: 'https://picsum.photos/seed/transmission-repair/800/600',
      desc: 'Clutch, gearbox, and fluid service for manual and automatic drivetrains.',
      turnaround: '2–4 days'
    },
    {
      index: '09',
      title: 'AC & Climate Repair',
      img: 'https://picsum.photos/seed/ac-repair/800/600',
      desc: 'Regassing, compressor checks, and leak detection for full cabin cooling.',
      turnaround: '3–5 hours'
    },
    {
      index: '10',
      title: 'Pre-Purchase Inspection',
      img: 'https://picsum.photos/seed/inspection/800/600',
      desc: 'Full vehicle health check before you buy, with a detailed condition report.',
      turnaround: '1–2 hours'
    },
    {
      index: '11',
      title: 'Body & Paint Repair',
      img: 'https://picsum.photos/seed/body-paint/800/600',
      desc: 'Dent removal, panel beating, and color-matched resprays to factory finish.',
      turnaround: '3–7 days'
    },
    {
      index: '12',
      title: 'Exhaust System Repair',
      img: 'https://picsum.photos/seed/exhaust-repair/800/600',
      desc: 'Muffler, pipe, and catalytic converter repair to restore proper flow and sound.',
      turnaround: '2–3 hours'
    },
    {
      index: '13',
      title: 'Battery & Charging Service',
      img: 'https://picsum.photos/seed/battery-service/800/600',
      desc: 'Load testing, alternator checks, and battery replacement for reliable starts.',
      turnaround: '1 hour'
    },
    {
      index: '14',
      title: 'Tire Replacement & Balancing',
      img: 'https://picsum.photos/seed/tire-replacement/800/600',
      desc: 'New tire fitting, rotation, and dynamic balancing for a smoother ride.',
      turnaround: '1 hour'
    },
    {
      index: '15',
      title: 'Fuel System Service',
      img: 'https://picsum.photos/seed/fuel-system-service/800/600',
      desc: 'Injector cleaning, fuel pump checks, and filter replacement for efficient burn.',
      turnaround: '2–3 hours'
    },
    {
      index: '16',
      title: 'Glass & Windshield Repair',
      img: 'https://picsum.photos/seed/glass-repair/800/600',
      desc: 'Chip repair and full windshield replacement with OEM-spec glass.',
      turnaround: '1–2 hours'
    }
  ];
}