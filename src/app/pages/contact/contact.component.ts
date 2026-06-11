import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimateDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, AnimateDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
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

  submitEnquiry() {
    // Basic format check
    if (!this.formData.fullName || !this.formData.phone) {
      alert('Full Name and Phone Number are required.');
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
