import {
  Component, OnInit, OnDestroy, NgZone,
  ChangeDetectorRef, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

/* ── Interfaces ──────────────────────────────────────────────── */
interface CarSpecs { engine: string; power: string; drive: string; year: string; }
interface CarModel {
  id: string; name: string; basePrice: number; glb: string; img: string; specs: CarSpecs;
}
interface PaintOption  { id: string; name: string; hex: string | null; price: number; }
interface RimOption    { id: string; name: string; price: number; img: string; }
interface FeatureOption{ id: string; name: string; price: number; desc: string; }
interface ConfigData   { models: CarModel[]; paints: PaintOption[]; rims: RimOption[]; options: FeatureOption[]; }

@Component({
  selector: 'app-configure',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ConfigureComponent implements OnInit, OnDestroy {

  @ViewChild('modelViewer') modelViewerRef!: ElementRef;

  configData: ConfigData | null = null;
  selectedModel!: CarModel;
  selectedPaint!: PaintOption;
  selectedRims!: RimOption;
  selectedOptions: FeatureOption[] = [];

  displayedPrice = 0;
  private targetPrice = 0;
  private rafId: any = null;

  isLoading = true;
  hasError = false;
  errorMessage = '';
  hasConfigError = false;

  originalMaterials = new Map<string, {
    baseColorFactor: number[];
    roughnessFactor: number;
    metallicFactor: number;
  }>();

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private zone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.http.get<ConfigData>('/configurator.json').subscribe({
      next: data => {
        this.configData = data;
        this.hasConfigError = false;

        // Set default values first
        this.selectedModel = data.models[0];
        this.selectedPaint = data.paints[0];
        this.selectedRims  = data.rims[0];
        this.selectedOptions = [];

        this.route.queryParams.subscribe(params => {
          if (!this.configData) return;

          let changed = false;

          // Model
          const mId = params['model'];
          if (mId) {
            const m = this.configData.models.find(x => x.id.toLowerCase() === mId.toLowerCase());
            if (m && m.id !== this.selectedModel.id) {
              this.selectedModel = m;
              this.isLoading = true;
              changed = true;
            }
          }

          // Paint
          const pId = params['paint'];
          if (pId) {
            const p = this.configData.paints.find(x => x.id.toLowerCase() === pId.toLowerCase());
            if (p && p.id !== this.selectedPaint.id) {
              this.selectedPaint = p;
              changed = true;
            }
          }

          // Rims
          const rId = params['rims'];
          if (rId) {
            const r = this.configData.rims.find(x => x.id.toLowerCase() === rId.toLowerCase());
            if (r && r.id !== this.selectedRims.id) {
              this.selectedRims = r;
              changed = true;
            }
          }

          // Options
          const optIdsStr = params['options'];
          const optIds = optIdsStr ? optIdsStr.split(',') : [];
          const currentOptIds = this.selectedOptions.map(o => o.id);
          const optionsChanged = optIds.length !== currentOptIds.length || !optIds.every((id: string) => currentOptIds.includes(id));
          if (optionsChanged) {
            this.selectedOptions = this.configData.options.filter(o => optIds.includes(o.id));
            changed = true;
          }

          this.displayedPrice = this.totalPrice;
          this.apply3DColor();
          this.cdr.markForCheck();
        });
      },
      error: err => {
        console.error('Failed to load configurator config', err);
        this.hasConfigError = true;
        this.isLoading = false;
        this.cdr.markForCheck();
      }
    });
  }

  ngOnDestroy() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }

  updateQueryParams() {
    if (!this.configData) return;
    const queryParams: any = {
      model: this.selectedModel.id,
      paint: this.selectedPaint.id,
      rims: this.selectedRims.id
    };
    if (this.selectedOptions.length > 0) {
      queryParams.options = this.selectedOptions.map(o => o.id).join(',');
    } else {
      queryParams.options = null;
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
  }

  /* ── Model select ─────────────────────────────────── */
  selectModel(m: CarModel) {
    if (this.selectedModel.id === m.id) return;
    this.selectedModel = m;
    this.isLoading = true;
    this.updateQueryParams();
    this.animatePriceTo(this.totalPrice);
    this.cdr.markForCheck();
  }

  /* ── Paint select ─────────────────────────────────── */
  selectPaint(p: PaintOption) {
    this.selectedPaint = p;
    this.updateQueryParams();
    this.apply3DColor();
    this.animatePriceTo(this.totalPrice);
  }

  /* ── Rims select ──────────────────────────────────── */
  selectRims(r: RimOption) {
    this.selectedRims = r;
    this.updateQueryParams();
    this.apply3DColor();
    this.animatePriceTo(this.totalPrice);
  }

  /* ── Options toggle ───────────────────────────────── */
  toggleOption(o: FeatureOption) {
    const idx = this.selectedOptions.findIndex(x => x.id === o.id);
    if (idx >= 0) this.selectedOptions.splice(idx, 1);
    else          this.selectedOptions.push(o);
    this.updateQueryParams();
    this.apply3DColor();
    this.animatePriceTo(this.totalPrice);
  }

  hasOption(o: FeatureOption) {
    return this.selectedOptions.some(x => x.id === o.id);
  }

  /* ── Price ────────────────────────────────────────── */
  get totalPrice(): number {
    if (!this.selectedModel || !this.selectedPaint || !this.selectedRims) return 0;
    return this.selectedModel.basePrice +
           this.selectedPaint.price +
           this.selectedRims.price +
           this.selectedOptions.reduce((s, o) => s + o.price, 0);
  }

  private animatePriceTo(target: number) {
    if (this.rafId) { cancelAnimationFrame(this.rafId); this.rafId = null; }
    const start = this.displayedPrice;
    const diff  = target - start;
    if (diff === 0) return;
    const t0 = performance.now();
    const dur = 450;
    this.zone.runOutsideAngular(() => {
      const step = (now: number) => {
        const el = Math.min(now - t0, dur);
        const ease = 1 - Math.pow(1 - el / dur, 3);
        const next = Math.round(start + diff * ease);
        if (next !== this.displayedPrice) {
          this.zone.run(() => { this.displayedPrice = next; this.cdr.markForCheck(); });
        }
        if (el < dur) this.rafId = requestAnimationFrame(step);
        else {
          this.rafId = null;
          this.zone.run(() => { this.displayedPrice = target; this.cdr.markForCheck(); });
        }
      };
      this.rafId = requestAnimationFrame(step);
    });
  }

  /* ── 3D model viewer loaded ──────────────────────── */
  onModelLoad() {
    this.isLoading = false;
    this.hasError = false;
    this.cacheOriginalMaterials();
    this.apply3DColor();
    this.cdr.markForCheck();
  }

  onModelError(event: any) {
    console.error('Model Viewer error:', event);
    this.hasError = true;
    this.isLoading = false;
    this.errorMessage = 'Failed to load the 3D model. Please check your network connection or try again.';
    this.cdr.markForCheck();
  }

  retryLoad() {
    this.hasError = false;
    this.isLoading = true;
    const mv = this.modelViewerRef?.nativeElement;
    if (mv) {
      const src = this.selectedModel.glb;
      mv.src = '';
      setTimeout(() => {
        mv.src = src;
        this.cdr.markForCheck();
      }, 50);
    }
    this.cdr.markForCheck();
  }

  cacheOriginalMaterials() {
    const mv = this.modelViewerRef?.nativeElement;
    if (!mv || !mv.model) return;
    this.originalMaterials.clear();
    const materials = mv.model.materials;
    materials.forEach((material: any) => {
      const name = material.name;
      const pbr = material.pbrMetallicRoughness;
      if (pbr) {
        this.originalMaterials.set(name, {
          baseColorFactor: pbr.baseColorFactor ? [...pbr.baseColorFactor] : [0.88, 0.88, 0.88, 1],
          roughnessFactor: pbr.roughnessFactor !== undefined ? pbr.roughnessFactor : 0.5,
          metallicFactor: pbr.metallicFactor !== undefined ? pbr.metallicFactor : 0.5
        });
      }
    });
  }

  parseHexToRgb(hex: string | null): number[] {
    if (!hex) return [0.88, 0.88, 0.88];
    const cleanHex = hex.replace('#', '');
    if (cleanHex.length !== 6) return [0.88, 0.88, 0.88];
    const r = parseInt(cleanHex.slice(0, 2), 16) / 255;
    const g = parseInt(cleanHex.slice(2, 4), 16) / 255;
    const b = parseInt(cleanHex.slice(4, 6), 16) / 255;
    return [isNaN(r) ? 0.88 : r, isNaN(g) ? 0.88 : g, isNaN(b) ? 0.88 : b];
  }

  /* ── Change actual hex color value of the vehicle ── */
  apply3DColor() {
    const mv = this.modelViewerRef?.nativeElement;
    if (!mv || !mv.model || this.originalMaterials.size === 0) return;

    const materials = mv.model.materials;
    const isTintEnabled = this.selectedOptions.some(o => o.id === 'tint');
    const isKitEnabled = this.selectedOptions.some(o => o.id === 'kit');

    materials.forEach((material: any) => {
      const name = material.name.toLowerCase();
      const cached = this.originalMaterials.get(material.name);

      // 1. Recolor rims/wheels
      if (
        name.includes('rim') ||
        name.includes('wheel') ||
        name.includes('alloy') ||
        name.includes('spoke')
      ) {
        if (this.selectedRims.id === 'carbon') {
          material.pbrMetallicRoughness.setBaseColorFactor([0.08, 0.08, 0.08, 1]);
          material.pbrMetallicRoughness.setRoughnessFactor(0.35);
          material.pbrMetallicRoughness.setMetallicFactor(0.15);
        } else if (this.selectedRims.id === 'forged') {
          material.pbrMetallicRoughness.setBaseColorFactor([0.76, 0.58, 0.15, 1]);
          material.pbrMetallicRoughness.setRoughnessFactor(0.22);
          material.pbrMetallicRoughness.setMetallicFactor(0.95);
        } else {
          if (cached) {
            material.pbrMetallicRoughness.setBaseColorFactor(cached.baseColorFactor);
            material.pbrMetallicRoughness.setRoughnessFactor(cached.roughnessFactor);
            material.pbrMetallicRoughness.setMetallicFactor(cached.metallicFactor);
          }
        }
      }
      // 2. Recolor window glass if tint option is toggled
      else if (name.includes('glass') || name.includes('window') || name.includes('windshield')) {
        if (isTintEnabled) {
          material.pbrMetallicRoughness.setBaseColorFactor([0.02, 0.02, 0.02, 0.95]);
          material.pbrMetallicRoughness.setRoughnessFactor(0.01);
          material.pbrMetallicRoughness.setMetallicFactor(0.98);
        } else {
          if (cached) {
            material.pbrMetallicRoughness.setBaseColorFactor(cached.baseColorFactor);
            material.pbrMetallicRoughness.setRoughnessFactor(cached.roughnessFactor);
            material.pbrMetallicRoughness.setMetallicFactor(cached.metallicFactor);
          }
        }
      }
      // 3. Recolor body kits/trim if body kit option is toggled
      else if (isKitEnabled && (
        name.includes('splitter') ||
        name.includes('spoiler') ||
        name.includes('diffuser') ||
        name.includes('skirt') ||
        name.includes('trim') ||
        name.includes('grille') ||
        name.includes('bumper')
      )) {
        material.pbrMetallicRoughness.setBaseColorFactor([0.05, 0.05, 0.05, 1]);
        material.pbrMetallicRoughness.setRoughnessFactor(0.4);
        material.pbrMetallicRoughness.setMetallicFactor(0.25);
      }
      // 4. Recolor vehicle paint / body
      else if (
        name.includes('body') ||
        name.includes('paint') ||
        name.includes('exterior') ||
        name.includes('primary') ||
        name.includes('car_body') ||
        name.includes('shell') ||
        name.includes('metal')
      ) {
        if (this.selectedPaint.id === 'stock') {
          if (cached) {
            material.pbrMetallicRoughness.setBaseColorFactor(cached.baseColorFactor);
            material.pbrMetallicRoughness.setRoughnessFactor(cached.roughnessFactor);
            material.pbrMetallicRoughness.setMetallicFactor(cached.metallicFactor);
          }
        } else {
          const [r, g, b] = this.parseHexToRgb(this.selectedPaint.hex);
          material.pbrMetallicRoughness.setBaseColorFactor([r, g, b, 1]);
          material.pbrMetallicRoughness.setRoughnessFactor(0.12);
          material.pbrMetallicRoughness.setMetallicFactor(0.95);
        }
      }
      // 5. Default restoration
      else {
        if (cached) {
          material.pbrMetallicRoughness.setBaseColorFactor(cached.baseColorFactor);
          material.pbrMetallicRoughness.setRoughnessFactor(cached.roughnessFactor);
          material.pbrMetallicRoughness.setMetallicFactor(cached.metallicFactor);
        }
      }
    });
  }

  /* ── WhatsApp link ────────────────────────────────── */
  get whatsappLink(): string {
    if (!this.selectedModel) return '';
    const opts = this.selectedOptions.length
      ? this.selectedOptions.map(o => `• ${o.name} (+${o.price.toLocaleString()} KES)`).join('\n')
      : 'None';
    const msg =
      `Hi Bravion Motors — custom 3D build request:\n\n` +
      `Model : ${this.selectedModel.name}\n` +
      `Paint : ${this.selectedPaint.name}\n` +
      `Rims  : ${this.selectedRims.name}\n` +
      `Extras: ${opts}\n\n` +
      `Total : ${this.totalPrice.toLocaleString()} KES\n\n` +
      `Please confirm availability and lead time. Thank you.`;
    return `https://wa.me/254712345678?text=${encodeURIComponent(msg)}`;
  }
}

