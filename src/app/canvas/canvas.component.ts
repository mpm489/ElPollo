import { AfterViewInit, Component, ElementRef, Inject, inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { World } from '../../models/world.class';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements AfterViewInit {
  @ViewChild('canvasElement', { static: false }) canvas!: ElementRef<HTMLCanvasElement>;
  world!: World;
  private router = inject(Router);
  


  constructor(@Inject(PLATFORM_ID) private platformId: object) {
   
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const canvas: HTMLCanvasElement = this.canvas.nativeElement;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        setTimeout(() => {
          this.world = new World(ctx); // Instanziere World nach kurzer Verzögerung
          
        });
      }
    }
  }

  restart() {
    
    this.router.navigateByUrl('');
  }



}

