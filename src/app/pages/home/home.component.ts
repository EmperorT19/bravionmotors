import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnimateDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, AnimateDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  scrollY = 0;

  // Count states for stats
  yearsOpen = 0;
  workshopBays = 0;
  carsInYard = 0;
  happyClients = 0;

  private animated = false;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (typeof window !== 'undefined') {
      this.scrollY = window.scrollY;
    }
  }

  ngOnInit() {
    this.setupIntersectionObserver();
    this.animateHero();
  }

  animateHero() {
    if (typeof window === 'undefined') return;

    // Initial state: car off-screen right, red banner fully covering
    document.documentElement.style.setProperty('--progress', '110');

    // Smooth transition from right to left
    setTimeout(() => {
      const duration = 8000; // 8 seconds
      const start = 90;
      const end = -45; // Move completely past left side of screen
      const startTime = performance.now();

      const animate = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // easeInOutCubic easing for ultra-smooth movement
        const ease = progress < 0.5 
          ? 4 * progress * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
          
        const currentValue = start + (end - start) * ease;
        document.documentElement.style.setProperty('--progress', currentValue.toString());

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Scroll to the next segment (Origin story) automatically after the animation finishes
          if (typeof window !== 'undefined') {
            const currentScroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
            if (currentScroll < 100) {
              const nextSegment = this.el.nativeElement.querySelector('.about-section');
              if (nextSegment) {
                nextSegment.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }
          }
        }
      };

      requestAnimationFrame(animate);
    }, 400); // 400ms delay for visual layout settling
  }

  setupIntersectionObserver() {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.animated) {
          this.animateCounts();
          this.animated = true;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    setTimeout(() => {
      const statsElement = this.el.nativeElement.querySelector('.stats-grid');
      if (statsElement) {
        observer.observe(statsElement);
      }
    }, 100);
  }

  animateCounts() {
    this.animateValue('yearsOpen', 0, 6, 1200);
    this.animateValue('workshopBays', 0, 6, 1200);
    this.animateValue('carsInYard', 0, 40, 1500);
    this.animateValue('happyClients', 0, 3500, 1800);
  }

  animateValue(prop: 'yearsOpen' | 'workshopBays' | 'carsInYard' | 'happyClients', start: number, end: number, duration: number) {
    const range = end - start;
    let current = start;
    const steps = Math.ceil(duration / 16);
    const increment = range / steps;
    const stepTime = 16;

    const timer = setInterval(() => {
      current += increment;
      if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
        current = end;
        clearInterval(timer);
      }
      this[prop] = Math.round(current);
    }, stepTime);
  }
}
