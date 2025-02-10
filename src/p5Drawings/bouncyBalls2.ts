import p5 from "p5";
import { Ball2 } from "./models/ball2";

export class BouncyBalls2 {
    Draw(sketch: p5) {
        let balls: Ball2[] = [];
        
        sketch.setup = () => {
            const canvas2 = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
            canvas2.parent('sketch-holder');
            sketch.background(255);
            
            // Initialize balls with random properties
            for (let i = 0; i < 5; i++) {
                balls.push(new Ball2(
                    sketch,
                    sketch.random(sketch.width), 
                    sketch.random(sketch.height), 
                    sketch.random(20, 40), 
                    sketch.random(2, 4), 
                    sketch.random(2, 4)
                ));
            }
        };
        
        sketch.draw = () => {
            sketch.background(255, 10); // Slight transparency for a trailing effect
            
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

