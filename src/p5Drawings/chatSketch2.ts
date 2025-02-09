import p5 from "p5";

export class ChatSketch2 {
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
          // Clear the background each frame so only current ripples are drawn
          sketch.background(255);
    
          // Update and draw all ripples
          for (let i = 0; i < ripples.length; i++) {
            const ripple = ripples[i];
    
            // Increase ripple size
            ripple.size += rippleSpeed;
    
            // Draw the ripple with its specific color
            sketch.fill(ripple.color);
            sketch.noStroke();
            sketch.ellipse(ripple.x, ripple.y, ripple.size);
    
            // Optional: Stop ripple size from growing indefinitely
            if (ripple.size > maxRippleSize) {
              // You can add a condition to stop it from growing indefinitely if needed
              // For example, you could add a limit on the ripple size, or leave it as is
            }
          }
        };
    
        sketch.mousePressed = () => {
          // Create a new ripple at the mouse position with a random color
          const randomColor = sketch.color(sketch.random(255), sketch.random(255), sketch.random(255)); // Random color
          ripples.push({
            x: sketch.mouseX,
            y: sketch.mouseY,
            size: 10, // Start size of the ripple
            color: randomColor, // Assign the random color to the ripple
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