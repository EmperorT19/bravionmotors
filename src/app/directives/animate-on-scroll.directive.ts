import { Directive, ElementRef, OnInit, OnDestroy, Input, Renderer2, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appAnimate]',
  standalone: true
})
export class AnimateDirective implements OnInit, OnDestroy {
  @Input('appAnimate') animationClass = ''; // 'reveal-left' | 'reveal-right' | 'reveal-scale' | 'reveal-up'
  @Input() countTo?: number;
  @Input() countDuration = 2000; // ms

  private observer?: IntersectionObserver;
  private hasAnimated = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Add the initial reveal class if specified
      if (this.animationClass) {
        this.renderer.addClass(this.el.nativeElement, this.animationClass);
      }

      this.setupObserver();
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupObserver(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          
          // Trigger CSS transition class
          this.renderer.addClass(this.el.nativeElement, 'visible');
          
          // Trigger count up if requested
          if (this.countTo !== undefined) {
            this.runCountUp();
          }

          // Unobserve since we only want to animate once
          if (this.observer) {
            this.observer.unobserve(this.el.nativeElement);
          }
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  private runCountUp(): void {
    const target = this.countTo!;
    const start = 0;
    const startTime = performance.now();

    const animateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / this.countDuration, 1);
      
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      const currentValue = Math.floor(start + (target - start) * easeProgress);

      this.renderer.setProperty(this.el.nativeElement, 'innerText', currentValue.toLocaleString());

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    this.ngZone.runOutsideAngular(() => {
      requestAnimationFrame(animateCount);
    });
  }
}
