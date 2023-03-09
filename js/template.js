// use these functions to draw the canvas, axis and mouse hover coordinate
function setup() {
  let canvas = createCanvas(windowWidth * 0.8, windowHeight * 0.4);
  canvas.parent("main");
}

// p5 runs this function 60 times per second (60fps) to draw the canvas,
// also, it optimised to not render in absence of change,
// if still browser lags, uncomment the framerate and run it at half speed
function draw() {
  // frameRate(30)
  background(20, 20, 30);
  fill(255);
  createAxis();
  showCoords();
}
