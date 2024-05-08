let capture;
let mic;
let threshold = 0.2; // adjust this value to change sensitivity
let pixelSize = 20; // adjust this value to change the size of pixels

function setup() {
  createCanvas(500, 400);
  
  // Initialize the video capture
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();
  
  // Initialize the audio input
  mic = new p5.AudioIn();
  mic.start();
  mic.amp(10); // Increase gain by a factor of 10
}

function draw() {
  // Read the latest frame from the video capture
  image(capture, 0, 0, width, height);
  
  // Analyze the audio input
  let level = mic.getLevel();
  
  // Check if the audio level is above the threshold
  if (level > threshold) {
    // Apply the pixel effect if the audio level is above the threshold
    let pixelCount = map(level, threshold, 1, 2, 20);
    let pixelW = width / pixelCount;
    let pixelH = height / pixelCount;
    
    for (let y = 0; y < height; y += pixelH) {
      for (let x = 0; x < width; x += pixelW) {
        let sx = x + sin(y * 0.1) * 10; // adjust these values for effect
        let sy = y + sin(x * 0.1) * 10; // adjust these values for effect
        let sw = pixelW; // adjust these values for effect
        let sh = pixelH; // adjust these values for effect
        let dx = x + sin(y * 0.05) * 20; // adjust these values for effect
        let dy = y + sin(x * 0.05) * 20; // adjust these values for effect
        let dw = pixelW; // adjust these values for effect
        let dh = pixelH; // adjust these values for effect
        
        let pixelColor = capture.get(sx, sy, sw, sh);
        image(pixelColor, dx, dy, dw, dh);
      }
    }
  }
}





