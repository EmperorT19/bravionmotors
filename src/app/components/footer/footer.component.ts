import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  processedLogoUrl = '';

  ngOnInit(): void {
    this.processLogo();
  }

  processLogo(): void {
    const img = new Image();
    img.src = 'bravion motors black.jpeg';
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
