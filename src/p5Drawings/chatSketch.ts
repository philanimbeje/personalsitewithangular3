import p5 from "p5";

export class ChatSketch {
    Draw(sketch: p5) {
        const ripples: any[] = [];
        const maxRippleSize = 200;
        const rippleSpeed = 1;
        
        sketch.setup = () => {
          const canvas2 = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
          canvas2.parent('sketch-holder');
          sketch.background(255);
        };
    
        sketch.draw = () => {
          sketch.background(255); // Clear the background every frame to avoid drawing over previous frames
    
          // Update and draw all ripples
          for (let i = ripples.length - 1; i >= 0; i--) {
            const ripple = ripples[i];
    
            // Update ripple size and opacity
            ripple.size += rippleSpeed;
            ripple.alpha -= 2;
    
            // Draw the ripple
            sketch.fill(0, 100, 255, ripple.alpha); // Blue with decreasing opacity
            sketch.noStroke();
            sketch.ellipse(ripple.x, ripple.y, ripple.size);
    
            // Remove the ripple when it is no longer visible
            if (ripple.alpha <= 0) {
              ripples.splice(i, 1);
            }
          }
        };
    
        sketch.mousePressed = () => {
          // Create a new ripple at the mouse position
          ripples.push({
            x: sketch.mouseX,
            y: sketch.mouseY,
            size: 10, // Start size of the ripple
            alpha: 255, // Full opacity
          });
        };
    
        sketch.keyPressed = () => {
          if (sketch.key === 'c') {
            ripples.length = 0; // Clear all ripples
            sketch.background(255); // Reset the background to white
          }
        };
      }
  }