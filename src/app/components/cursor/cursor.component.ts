import { Component, OnInit, OnDestroy, ElementRef, ViewChild, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div #cursorDot class="custom-cursor hidden"></div>
  `,
  styleUrls: ['./cursor.component.css']
})
export class CursorComponent implements OnInit, OnDestroy {
  @ViewChild('cursorDot', { static: true }) cursorDot!: ElementRef<HTMLDivElement>;

  private targetX = 0;
  private targetY = 0;
  private posX = 0;
  private posY = 0;
  private animationFrameId?: number;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.runOutsideAngular(() => {
        window.addEventListener('mousemove', this.onMouseMove);
        window.addEventListener('mouseover', this.onMouseOver);
        window.addEventListener('mouseleave', this.onMouseLeave);
        this.tick();
      });
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('mousemove', this.onMouseMove);
      window.removeEventListener('mouseover', this.onMouseOver);
      window.removeEventListener('mouseleave', this.onMouseLeave);
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
      }
    }
  }

  private onMouseMove = (event: MouseEvent) => {
    this.targetX = event.clientX;
    this.targetY = event.clientY;
    const el = this.cursorDot.nativeElement;
    if (el.classList.contains('hidden')) {
      el.classList.remove('hidden');
    }
  };

  private onMouseLeave = () => {
    this.cursorDot.nativeElement.classList.add('hidden');
  };

  private onMouseOver = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const isInteractive = target.tagName === 'A' || 
                          target.tagName === 'BUTTON' || 
                          target.closest('a') || 
                          target.closest('button') || 
                          target.classList.contains('interactive');
    
    const el = this.cursorDot.nativeElement;
    if (isInteractive) {
      el.classList.add('hovered');
    } else {
      el.classList.remove('hovered');
    }
  };

  private tick = () => {
    const lerp = 0.15;
    this.posX += (this.targetX - this.posX) * lerp;
    this.posY += (this.targetY - this.posY) * lerp;

    const el = this.cursorDot.nativeElement;
    el.style.transform = `translate3d(${this.posX}px, ${this.posY}px, 0)`;

    this.animationFrameId = requestAnimationFrame(this.tick);
  };
}
