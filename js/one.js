function setup() {
  let canvas = createCanvas(windowWidth * 0.8, windowHeight * 0.4);
  canvas.parent("main");
}

function draw() {
  background(20, 20, 30);
  fill(255);
  createAxis();
  drawFunction(config.fn);
  showCoords();
}

// setup ends
function handleClick(input) {
  if (input === "sqr") {
    config.fn = fsqr;
  }
  if (input === "twice") {
    config.fn = f2;
  }
  if (input === "equal") {
    config.fn = eq;
  }
}
function fsqr(x) {
  return x * x;
}
function f2(x) {
  return 5 * x;
}
function slope(x) {
  return 2 * x 
}
function eq(x) {
  return x;
}
