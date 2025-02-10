import {Component, ElementRef, OnInit, ViewChild, AfterViewInit, OnDestroy, input, ViewChildren, QueryList } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Project } from '../../models/project';


@Component({
  selector: 'app-custom-tile',
  imports: [MatCardModule, MatButtonModule, ],
  templateUrl: './custom-tile.component.html',
  styleUrl: './custom-tile.component.css'
})
export class CustomTileComponent implements AfterViewInit {
  @ViewChildren('tiltImage') tiltImages!: QueryList<ElementRef>;
  
  project = input.required<Project>();

    ngAfterViewInit() {
      this.initializeTiltEffect();
    }
  
    initializeTiltEffect() {
      setTimeout(() => {
        const elements = document.querySelectorAll<HTMLElement>('.tilt');
        elements.forEach(element => {
          if ((window as any).VanillaTilt) {
            (window as any).VanillaTilt.init(element, {
              max: 25,
              speed: 400
            });
          }
        });
      }, 500);
    }

  open(url: string): void {
    if (url) {
      window.open(url, '_blank');
    } else {
      console.error('Invalid URL');
    }
  }

  launch(url: string): void {
    this.open(url);
  }
}
