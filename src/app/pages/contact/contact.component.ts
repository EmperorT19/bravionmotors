import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AnimateDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, AnimateDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formData = {
    fullName: '',
    phone: '',
    email: '',
    service: 'Car Purchase',
    carModel: '',
    datetime: '',
    message: ''
  };

  submitted = false;
  redirectedNotice: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const srv = params['service'];
      const model = params['model'] || params['car'] || params['part'];
      const msg = params['message'];

      if (srv) {
        this.formData.service = srv;
      }
      if (model) {
        this.formData.carModel = model;
      }
      if (msg) {
        this.formData.message = msg;
      }

      if (srv || model) {
        const parts: string[] = [];
        if (srv) parts.push(`Service: ${srv}`);
        if (model) parts.push(`Model / Item: ${model}`);
        this.redirectedNotice = parts.join(' | ');
      }
    });
  }

  submitEnquiry() {
    // Basic format check
    if (!this.formData.fullName || !this.formData.phone) {
      alert('Full name and phone number are required.');
      return;
    }
    
    // Simulate submission
    this.submitted = true;
    
    // Clear form after success
    setTimeout(() => {
      this.submitted = false;
      this.redirectedNotice = null;
      this.formData = {
        fullName: '',
        phone: '',
        email: '',
        service: 'Car Purchase',
        carModel: '',
        datetime: '',
        message: ''
      };
    }, 4000);
  }
}
