import p5 from "p5";
import { Ball } from "./models/ball";

export class BouncyBalls {
    Draw(sketch: p5) {
        let balls: Ball[] = [];
        sketch.setup = () => {
          const canvas2 = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
          canvas2.parent('sketch-holder');
          sketch.background(255);
      
          for (let i = 0; i < 5; i++) {
            balls.push(new Ball(sketch.random(sketch.width), sketch.random(sketch.height), sketch.random(20, 40), sketch.random(2, 4), sketch.random(2, 4)));
          }
        };
      
        sketch.draw = () => {
          sketch.background(255);
          for (let ball of balls) {
            ball.update(sketch);
            ball.display(sketch);
          }
        };
      
        sketch.keyPressed = () => {
          if (sketch.key === 'c') {
            sketch.clear();
            sketch.background(255);
          }
        };
    }
}