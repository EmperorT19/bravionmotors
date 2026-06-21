import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  processedLogoUrl = '';

  ngOnInit(): void {
    this.processLogo();
  }

  processLogo(): void {
    const img = new Image();
    img.src = 'images/logo-dark.jpg';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // Make the black/dark background transparent
          if (r < 45 && g < 45 && b < 45) {
            data[i + 3] = 0; // Alpha = 0
          }
        }
        ctx.putImageData(imgData, 0, 0);
        this.processedLogoUrl = canvas.toDataURL('image/png');
      }
    };
  }
}
