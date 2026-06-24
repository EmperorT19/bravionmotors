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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['service']) {
        this.formData.service = params['service'];
      }
      if (params['model']) {
        this.formData.carModel = params['model'];
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
