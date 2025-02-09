import p5 from "p5";

export class SketchPad {
    Draw(sketch: p5) {
        sketch.setup = () => {
          const canvas2 = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
          canvas2.parent('sketch-holder');
          sketch.background(255);
        };
    
        sketch.draw = () => {
          if (sketch.mouseIsPressed) {
            if (sketch.mouseButton === sketch.LEFT) {
              sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
            } else if (sketch.mouseButton === sketch.CENTER) {
              sketch.background(255);
            }
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