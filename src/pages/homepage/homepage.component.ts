import { Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import p5 from 'p5';
import { SketchPad,  } from '../../p5Drawings/sketchPad';
import { BouncyBalls2 } from '../../p5Drawings/bouncyBalls2';
import { ChatSketch } from '../../p5Drawings/chatSketch';
import { ChatSketch2 } from '../../p5Drawings/chatSketch2';
import { ChatSketch3 } from '../../p5Drawings/chatSketch3';
import { BouncyBalls } from '../../p5Drawings/bouncyBalls';
@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit  {

  private canvas: any;
  private randomNumber: number = Math.floor(Math.random() * 6);
  
  ngOnInit(): void {
    const sketch = (sketch: p5) => {
      this.selectDrawing(sketch);
    };
    this.canvas = new p5(sketch);
  }

  ngOnDestroy(): void {
    this.canvas.remove();
  }

  selectDrawing(sketch:any)
  {
    switch (this.randomNumber) {
      case 0:
        console.log("Drawing Canvas Selected");
        SketchPad.prototype.Draw(sketch);
        break;
      case 1:
        console.log("BouncyBalls Selected");
        BouncyBalls.prototype.Draw(sketch);
        break;
      case 2:
        console.log("BouncyBalls2 Selected");
        BouncyBalls2.prototype.Draw(sketch);
        break;
      case 3:
        console.log("ChatSketch Selected");
        ChatSketch.prototype.Draw(sketch);
        break;
      case 4:
        console.log("ChatSketch2 Selected");
        ChatSketch2.prototype.Draw(sketch);
        break;
      case 5:
        console.log("ChatSketch3 Selected");
        ChatSketch3.prototype.Draw(sketch);
        break;
      default:
        console.log("Unexpected value.");
    }
  }
}

