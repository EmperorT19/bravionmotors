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
