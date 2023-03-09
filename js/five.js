function setup() {
  let canvas = createCanvas(windowWidth * 0.8, windowHeight * 0.4);
  canvas.parent("main");
}

function draw() {
  background(20, 20, 30);
  fill(255);
  createAxis();
  showCoords();
}