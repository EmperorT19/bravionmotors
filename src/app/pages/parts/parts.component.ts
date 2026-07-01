import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimateDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-parts',
  standalone: true,
  imports: [CommonModule, RouterModule, AnimateDirective],
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
      img: 'https://i0.wp.com/sensitivebrake.com/wp-content/uploads/2024/09/carbon-ceramic-brake-pads.jpg?resize=600%2C407&ssl=1', // verified
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
      img: 'https://sc04.alicdn.com/kf/H9a5e63354b2643a3998aecfae647ae74a.jpg', // verified
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
      img: 'https://flowparts.com/cdn/shop/products/A-5480_1-Z.jpg?v=1568938503&width=1445', // placeholder - swap via script
      specs: [
        { label: 'Filtration efficiency', value: '99% at 10 microns' },
        { label: 'Housing material', value: 'Heavy-gauge steel' },
        { label: 'Bypass valve', value: '2.5 bar setting' }
      ]
    },
    {
      id: '04',
      title: 'Performance air filter',
      category: 'Air filter',
      desc: 'Reusable cotton-gauze filtration element engineered for increased airflow and improved throttle response without sacrificing engine protection.',
      img: 'https://www.highpowermedia.com/retimages/induction-system_cotton-filters.jpg',
      specs: [
        { label: 'Media', value: 'Oiled cotton gauze' },
        { label: 'Airflow increase', value: '+12% vs OEM' },
        { label: 'Service interval', value: '50,000 km washable' }
      ]
    },
    {
      id: '05',
      title: 'Coilover suspension kit',
      category: 'Suspension',
      desc: 'Adjustable height and damping coilover system engineered for precise handling balance across street and track conditions.',
      img: 'https://unpluggedperformance.com/wp-content/uploads/2020/10/Tesla-Model-3-Sport-Pro-Race-Pro-Coilovers-Suspension-Unplugged-Performance-6-1000x1000.jpg',
      specs: [
        { label: 'Damping', value: '32-way adjustable' },
        { label: 'Spring rate', value: '8-10 kg/mm' },
        { label: 'Material', value: 'Anodized 6061 aluminum body' }
      ]
    },
    {
      id: '06',
      title: 'Stainless cat-back exhaust',
      category: 'Exhaust system',
      desc: 'Mandrel-bent stainless steel exhaust system reducing back pressure and delivering a deeper, resonant tone.',
      img: 'https://m.media-amazon.com/images/I/61I-UshfECL._AC_UF1000,1000_QL80_.jpg',
      specs: [
        { label: 'Material', value: '304 stainless steel' },
        { label: 'Pipe diameter', value: '76mm mandrel-bent' },
        { label: 'Weight savings', value: '-4.1 kg vs OEM' }
      ]
    },
    {
      id: '07',
      title: 'Performance clutch kit',
      category: 'Clutch',
      desc: 'Heavy-duty organic-ceramic hybrid clutch disc paired with a high-clamping-force pressure plate for reliable power transfer.',
      img: 'https://southbendclutch.com/cdn/shop/files/SDD3250-5G.jpg?v=1765453252&width=1400',
      specs: [
        { label: 'Disc material', value: 'Organic-ceramic hybrid' },
        { label: 'Clamp load', value: '900 kg' },
        { label: 'Torque capacity', value: '550 Nm' }
      ]
    },
    {
      id: '08',
      title: 'LED headlight assembly',
      category: 'Lighting',
      desc: 'High-output LED headlight units with adaptive beam patterns for improved visibility and reduced power draw.',
      img: 'https://fortnine.ca/media/catalog/product/cache/a2bf45e9635ff86c8c09fbc84b193941/catalogimages/koso/zenith-led-headlight-ga030000--5.jpg',
      specs: [
        { label: 'Light output', value: '6000 lumens' },
        { label: 'Color temperature', value: '6000K' },
        { label: 'Power draw', value: '35W per unit' }
      ]
    },
    {
      id: '09',
      title: 'Performance radiator',
      category: 'Cooling system',
      desc: 'Dual-pass aluminum radiator core engineered for maximum heat rejection under sustained high-load conditions.',
      img: 'https://crawfordperformance.com/cdn/shop/articles/performance-radiator-engine-is-an-upgrade-for-you-3264647.webp?v=1780544215&width=2000',
      specs: [
        { label: 'Core material', value: 'Full aluminum' },
        { label: 'Cooling capacity', value: '+30% vs OEM' },
        { label: 'Core rows', value: '2-row dual pass' }
      ]
    },
    {
      id: '10',
      title: 'Short-throw shifter',
      category: 'Drivetrain',
      desc: 'CNC-machined short-throw shifter reducing gear-change travel for faster, more precise shifts.',
      img: 'https://jdmuscleusa.com/cdn/shop/articles/what-are-the-benefits-of-short-shifter-do-you-need-it-4223222.jpg?v=1780986156&width=1100',
      specs: [
        { label: 'Throw reduction', value: '40% shorter' },
        { label: 'Material', value: 'Billet aluminum' },
        { label: 'Bushings', value: 'Polyurethane' }
      ]
    },
    {
      id: '11',
      title: 'AGM battery',
      category: 'Battery',
      desc: 'Absorbed glass mat battery offering vibration resistance and stable power delivery for high-demand electrical systems.',
      img: 'https://avebattery.com/wp-content/uploads/2025/11/what-is-a-agm-battery.webp',
      specs: [
        { label: 'Capacity', value: '95 Ah' },
        { label: 'Cold cranking amps', value: '850 CCA' },
        { label: 'Type', value: 'AGM, maintenance-free' }
      ]
    },
    {
      id: '12',
      title: 'Performance turbocharger',
      category: 'Turbocharger',
      desc: 'Ball-bearing turbocharger with upgraded compressor wheel for reduced lag and increased peak boost capability.',
      img: 'https://cdn11.bigcommerce.com/s-gnopa3kz47/images/stencil/500x659/products/2512/519064/processed__36027.1775520626.png?c=2',
      specs: [
        { label: 'Bearing type', value: 'Dual ball-bearing' },
        { label: 'Max boost', value: '1.8 bar' },
        { label: 'Compressor wheel', value: 'Billet aluminum' }
      ]
    },
    {
      id: '13',
      title: 'Performance spark plugs',
      category: 'Ignition',
      desc: 'Iridium fine-wire electrode plugs delivering stronger spark energy for cleaner combustion and improved throttle response.',
      img: 'https://i0.wp.com/stnonline.com/wp-content/uploads/2012/11/images_BoschSparkPlug.png?fit=350%2C233&quality=100&strip=all&ssl=1',
      specs: [
        { label: 'Electrode material', value: 'Iridium' },
        { label: 'Gap', value: '0.8mm' },
        { label: 'Heat range', value: '7-9 (adjustable)' }
      ]
    },
    {
      id: '14',
      title: 'Carbon fiber drive shaft',
      category: 'Drivetrain',
      desc: 'Lightweight carbon fiber propeller shaft reducing rotational mass and improving drivetrain responsiveness.',
      img: 'https://reeldriveline.com/wp-content/uploads/2024/10/Carbon-Aluminum-Shafts-2-Large.jpeg',
      specs: [
        { label: 'Material', value: 'Carbon fiber composite' },
        { label: 'Weight savings', value: '-3.6 kg vs steel' },
        { label: 'Max torque rating', value: '650 Nm' }
      ]
    },
    {
      id: '15',
      title: 'Big brake caliper kit',
      category: 'Brake calipers',
      desc: 'Six-piston forged monobloc calipers paired with larger rotors for significantly increased stopping power.',
      img: 'https://ishikawa-engineering.com/cdn/shop/files/BBK-V3-4-2.jpg?v=1769824560&width=1200',
      specs: [
        { label: 'Piston count', value: '6-piston' },
        { label: 'Rotor diameter', value: '380mm' },
        { label: 'Caliper material', value: 'Forged monobloc aluminum' }
      ]
    },
    {
      id: '16',
      title: 'Performance fuel injectors',
      category: 'Fuel system',
      desc: 'High-impedance injectors with optimized spray pattern for improved atomization and fuel delivery accuracy.',
      img: 'https://www.fiveomotorsport.com/media/catalog/product/cache/ca71d904a9066b3ee4891759bf163b61/1/0/10399b2000_b.jpg',
      specs: [
        { label: 'Flow rate', value: '550 cc/min' },
        { label: 'Spray pattern', value: '12-hole atomized' },
        { label: 'Impedance', value: 'High-Z' }
      ]
    },
    {
      id: '17',
      title: 'Adjustable sway bar kit',
      category: 'Suspension',
      desc: 'Hollow chromoly anti-roll bars with multi-position end links for tunable handling balance.',
      img: 'https://trickchassis.com/wp-content/uploads/TC268-G.jpg',
      specs: [
        { label: 'Material', value: 'Chromoly steel' },
        { label: 'Adjustment positions', value: '3-way' },
        { label: 'Weight', value: '4.8 kg (front/rear set)' }
      ]
    },
    {
      id: '18',
      title: 'Performance timing belt kit',
      category: 'Engine timing',
      desc: 'Reinforced timing belt with high-tensile fiberglass cords, bundled with idler and tensioner for complete service.',
      img: 'https://m.media-amazon.com/images/I/81e-TTVST8L.jpg',
      specs: [
        { label: 'Belt material', value: 'Fiberglass-reinforced rubber' },
        { label: 'Service life', value: '100,000 km' },
        { label: 'Kit contents', value: 'Belt, tensioner, idler' }
      ]
    },
    {
      id: '19',
      title: 'Cold air intake system',
      category: 'Intake system',
      desc: 'Heat-shielded intake tract drawing cooler ambient air for denser charge and improved throttle response.',
      img: 'https://flasharkracing.com/cdn/shop/articles/What-Does-a-Cold-Air-Intake-Do-Flashark-95630092_cdf2d970-1f96-4b36-917f-4d584c8c0aa5.jpg?v=1762411851',
      specs: [
        { label: 'Material', value: 'Mandrel-bent aluminum' },
        { label: 'Heat shield', value: 'Laser-cut composite' },
        { label: 'Power gain', value: '+9 hp' }
      ]
    },
    {
      id: '20',
      title: 'Limited-slip differential',
      category: 'Differential',
      desc: 'Plate-type limited-slip differential improving traction and power delivery during cornering and acceleration.',
      img: 'https://media.torque.com.sg/public/2015/08/limited-slip-differential-lsd-pic1-1024x695.jpg',
      specs: [
        { label: 'Type', value: 'Plate-type LSD' },
        { label: 'Lock ratio', value: '1.5-way' },
        { label: 'Housing', value: 'Cast iron' }
      ]
    },
    {
      id: '21',
      title: 'Performance tire set',
      category: 'Tires',
      desc: 'Asymmetric tread compound tires engineered for maximum dry grip and consistent performance under high lateral loads.',
      img: 'https://s19533.pcdn.co/wp-content/uploads/2021/06/Sourcebook-Passenger-Tires-1000x563.jpg',
      specs: [
        { label: 'Compound', value: 'Asymmetric performance' },
        { label: 'Tread wear rating', value: '280' },
        { label: 'Size range', value: '18"-21"' }
      ]
    },
    {
      id: '22',
      title: 'Carbon fiber body kit',
      category: 'Body kit',
      desc: 'Aerodynamic front splitter, side skirts, and rear diffuser engineered for reduced lift and improved high-speed stability.',
      img: 'https://m.media-amazon.com/images/I/61bbegPotHL._AC_UF894,1000_QL80_.jpg',
      specs: [
        { label: 'Material', value: '2x2 twill carbon fiber' },
        { label: 'Downforce gain', value: '+18 kg at 200 km/h' },
        { label: 'Finish', value: 'UV-resistant clear coat' }
      ]
    },
    {
      id: '23',
      title: 'Racing bucket seats',
      category: 'Interior',
      desc: 'FIA-approved fixed-back bucket seats with deep side bolstering for enhanced lateral support during spirited driving.',
      img: 'https://www.tgrmotorsport.com/cdn/shop/files/rn-image_picker_lib_temp_6e859882-0e1d-4955-b5a3-e70a2756f193.jpg?v=1767965786',
      specs: [
        { label: 'Shell material', value: 'Fiberglass-reinforced composite' },
        { label: 'Certification', value: 'FIA 8855-1999' },
        { label: 'Weight', value: '7.2 kg per seat' }
      ]
    },
    {
      id: '24',
      title: 'OBD performance sensor kit',
      category: 'Electronics & sensors',
      desc: 'Wideband oxygen and boost pressure sensors providing accurate real-time data for tuning and diagnostics.',
      img: 'https://tunertools.com/cdn/shop/products/30-0333-with-obd-port-and-sensor-web_480x480.jpg?v=1546633121',
      specs: [
        { label: 'Sensor type', value: 'Wideband O2 + boost' },
        { label: 'Response time', value: '<100ms' },
        { label: 'Output', value: 'Analog & CAN bus' }
      ]
    },
    {
      id: '25',
      title: 'High-output alternator',
      category: 'Charging system',
      desc: 'Uprated alternator delivering increased amperage output to support high-draw electrical accessories.',
      img: 'https://unitechmotor.com/wp-content/uploads/2024/03/What-is-High-Output-Alternator-and-How-does-it-work.webp',
      specs: [
        { label: 'Output', value: '220A' },
        { label: 'Pulley type', value: 'Serpentine, 6-rib' },
        { label: 'Voltage regulation', value: 'Internal, ±0.2V' }
      ]
    },
    {
      id: '26',
      title: 'Electric power steering rack',
      category: 'Steering',
      desc: 'Direct-fit electric power steering rack offering precise, variable-ratio steering feel with reduced parasitic drag.',
      img: 'https://www.ev-components.com/uploads/42138/products/2025022614200611dbb.jpg?size=750x0',
      specs: [
        { label: 'Type', value: 'Electric, variable-ratio' },
        { label: 'Turns lock-to-lock', value: '2.4' },
        { label: 'Housing material', value: 'Cast aluminum' }
      ]
    },
    {
      id: '27',
      title: 'High-pressure fuel pump',
      category: 'Fuel system',
      desc: 'Direct-injection fuel pump upgrade supporting higher flow rates needed for increased power output.',
      img: 'https://germanperformance.com.au/cdn/shop/files/apr-fsi-high-pressure-fuel-pump-upgrade-709095.jpg?v=1726045606',
      specs: [
        { label: 'Max pressure', value: '350 bar' },
        { label: 'Flow rate', value: '+35% vs OEM' },
        { label: 'Construction', value: 'Billet steel body' }
      ]
    },
    {
      id: '28',
      title: 'Performance AC compressor',
      category: 'Climate control',
      desc: 'Direct-fit air conditioning compressor restoring efficient cabin cooling with reduced parasitic engine load.',
      img: 'https://cdn11.bigcommerce.com/s-1q7hsrfwpu/images/stencil/1280x1280/products/4364/17837/BLACK-PEANUT-8RIB__41261.1695052869.jpg?c=2',
      specs: [
        { label: 'Type', value: 'Variable-displacement scroll' },
        { label: 'Refrigerant', value: 'R134a / R1234yf compatible' },
        { label: 'Drive', value: 'Electromagnetic clutch' }
      ]
    },
    {
      id: '29',
      title: 'Heavy-duty starter motor',
      category: 'Starting system',
      desc: 'Gear-reduction starter motor offering faster cranking speed and improved reliability in high-compression engines.',
      img: 'https://cdn.shopify.com/s/files/1/0006/5323/0135/files/Fig-C-Denso-gear-reduction_12581fd2-f8ca-45a0-a90c-a2eb6c7269ff.jpg?v=1527647492',
      specs: [
        { label: 'Type', value: 'Gear-reduction' },
        { label: 'Output', value: '2.2 kW' },
        { label: 'Cranking speed', value: '+25% vs OEM' }
      ]
    },
    {
      id: '30',
      title: 'Acoustic windshield',
      category: 'Glass & visibility',
      desc: 'Laminated acoustic-dampening windshield reducing cabin noise while maintaining OEM-level optical clarity.',
      img: 'https://www.olimpia.com.tr/application/files/2816/7957/9801/ON_CAM.jpg',
      specs: [
        { label: 'Glass type', value: 'Laminated, acoustic interlayer' },
        { label: 'Noise reduction', value: '-3 dB vs standard' },
        { label: 'Thickness', value: '5.1mm' }
      ]
    },
    {
      id: '31',
      title: 'Elite performance engine oil',
      category: 'Oils',
      desc: 'Fully synthetic, high-performance ester-based motor oil engineered for maximum shear stability and engine protection at high RPMs.',
      img: 'https://m.media-amazon.com/images/I/51-zH6rH6RL.jpg',
      specs: [
        { label: 'Viscosity', value: '5W-40' },
        { label: 'Base stock', value: 'Group V Ester' },
        { label: 'Volume', value: '5 Litres' }
      ]
    },
    {
      id: '32',
      title: 'Synthetic gear lubricant',
      category: 'Lubricants',
      desc: 'Heavy-duty synthetic gear lubricant designed for limited-slip differentials and high-load manual transmissions.',
      img: 'https://lubrex.net/wp-content/uploads/2021/12/SHIFT-SYN-TRANS-SAE-40-1.webp',
      specs: [
        { label: 'Viscosity', value: '75W-90' },
        { label: 'Rating', value: 'API GL-5' },
        { label: 'Volume', value: '1 Litre' }
      ]
    }
  ];
}