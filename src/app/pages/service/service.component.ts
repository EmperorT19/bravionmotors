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
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzi5dJrWy7ekmYxC97maXJ_3ErLwha0atEfsHYxpZtQ-wfa8ImyVF_UxPB&s=10',
      desc: 'Complete rebuild of power units to restore factory-spec cylinder compression.'
    },
    {
      index: '02',
      title: 'Suspension Tuning',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHXpE3ULKBmmpDVYjKaDy9dTcO_KBzKoCQpU_Z2QU1HfNiRbGDhr7SwsgB&s=10',
      desc: 'Damping calibration and bushing swaps for African road compliance.'
    },
    {
      index: '03',
      title: 'Electrical Diagnostics',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEPmpfE_QRh6jAZaoSQc_RxwZoNvZR3tUmV2WYYaZ02JiTvqNdqfpPle8&s=10',
      desc: 'OBD scans and wiring repair via professional oscilloscope analysis.'
    },
    {
      index: '04',
      title: 'Wheel Alignment',
      img: 'https://tirewarehouse.ca/wp-content/uploads/2025/02/Winter-tires.webp',
      desc: 'Precision 3D alignment and tire balancing to eliminate steering drift.'
    },
    {
      index: '05',
      title: 'Aesthetic Detailing',
      img: 'https://i0.wp.com/studiolumina.com.au/wp-content/uploads/2024/02/PC2-scaled.jpg?resize=1080%2C772&ssl=1',
      desc: 'Multi-stage paint correction, interior detailing, and ceramic coating protection.'
    },
    {
      index: '06',
      title: 'Routine Maintenance',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUooQjs3HVyTNWL5FpslTU8AO62z3_kyAiUGZTsqtlvg&s=10',
      desc: 'Fluid flushes, filter changes, and quick multi-point safety inspections.'
    },
    {
      index: '07',
      title: 'Brake System Service',
      img: 'https://cdn.prod.website-files.com/63a9ea8487ae200241446bf6/69a1aeb12b7262e91f1e9cd6_82be20106f19eb3c69cbcac25e9a59ea7bfe50c5.jpeg',
      desc: 'Pad replacement, rotor resurfacing, and fluid bleeding for reliable stopping power.'
    },
    {
      index: '08',
      title: 'Transmission Repair',
      img: 'https://www.griffinsautorepair.com/wp-content/uploads/2020/12/06c0084b0313536e19256639dd391165.jpg',
      desc: 'Clutch, gearbox, and fluid service for manual and automatic drivetrains.'
    },
    {
      index: '09',
      title: 'AC & Climate Repair',
      img: 'https://www.collectmechanic.co.uk/_next/image?url=https%3A%2F%2Fpub-0955b871c8134b739458890f330b5165.r2.dev%2Fcollect-mechanic%2Fimages%2Fsub-services%2Faircon-regas.webp&w=2048&q=75',
      desc: 'Regassing, compressor checks, and leak detection for full cabin cooling.'
    },
    {
      index: '10',
      title: 'Pre-Purchase Inspection',
      img: 'https://imgv2-1-f.scribdassets.com/img/document/407358797/original/fc85164599/1?v=1',
      desc: 'Full vehicle health check before you buy, with a detailed condition report.'
    },
    {
      index: '11',
      title: 'Body & Paint Repair',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3xYCTidfe12YoOKJ6MHoXZaoyuanGSywj46SaDsP7EgqqKp-9X2afGx2&s=10',
      desc: 'Dent removal, panel beating, and color-matched resprays to factory finish.'
    },
    {
      index: '12',
      title: 'Exhaust System Repair',
      img: 'https://choiceautorepair.com/wp-content/uploads/2025/06/exhaust-system-repair-raleight-1024x678.jpg',
      desc: 'Muffler, pipe, and catalytic converter repair to restore proper flow and sound.'
    },
    {
      index: '13',
      title: 'Battery & Charging Service',
      img: 'https://m.media-amazon.com/images/I/61qzSw45tRL.jpg',
      desc: 'Load testing, alternator checks, and battery replacement for reliable starts.'
    },
    {
      index: '14',
      title: 'Tire Replacement & Balancing',
      img: 'https://www.utires.com/articles/wp-content/uploads/2017/06/2.Methods-for-tire-balancing.webp',
      desc: 'New tire fitting, rotation, and dynamic balancing for a smoother ride.'
    },
    {
      index: '15',
      title: 'Fuel System Service',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVY3N0OF0DHSmy4RpNrDI_le6ryOgV_7Gr4OL4GjwDEpRCiyvJ2jpw8wdI&s=10',
      desc: 'Injector cleaning, fuel pump checks, and filter replacement for efficient burn.'
    },
    {
      index: '16',
      title: 'Glass & Windshield Repair',
      img: 'https://h3f5ivd9.b-cdn.net/3079b912648d2044a3dda9de83a994b6.jpg',
      desc: 'Chip repair and full windshield replacement with OEM-spec glass.'
    },
    {
      index: '17',
      title: 'Cooling System Repair',
      img: 'images/service-cooling.png',
      desc: 'Radiator replacements, coolant flushes, and water pump servicing to ensure optimal thermal performance.'
    },
    {
      index: '18',
      title: 'Performance ECU Tuning',
      img: 'images/service-ecu-tuning.png',
      desc: 'Custom software remapping, dyno calibration, and speed limiter adjustments to unleash your engine\'s true potential.'
    }
  ];
}