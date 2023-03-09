function setup() {
  let canvas = createCanvas(windowWidth * 0.8, windowHeight * 0.4);
  canvas.parent("main");
}

function draw() {
  background(20, 20, 30);
  fill(255);
  createAxis();
  showCoords();

  let data = [
    [20, 50],
    // [30, 80],
  ];
  drawData(data);
  predictron(data[0]);
}

function predictron(data) {
  // y = mx
  // one way : m = y/x
  // in this way, we didn't account for the error we made
  // what error? because to begin with we will guess the m and then see how wrong we were
  let input = data[0];
  let answer = data[1];
  let guess = random(1, -1);
  let prediction = guess * input;

  push();
  stroke(0, 255, 255);
  strokeWeight(10);
  point(input, -prediction);
  pop();

  let error = answer - prediction;
  let delta = error / input;

  console.table({
    input,
    answer,
    guess,
    prediction,
    error,
    delta,
  });

  prediction = (guess + delta) * input;

  console.table({
    input,
    answer,
    newguess: guess + delta,
    prediction,
  });

  push();
	// draw points
  stroke(180);
  strokeWeight(6);
  point(input, -prediction);
	// draw a line assuming 0,0 interect
  stroke(180);
	strokeWeight(2)
  line(0, 0, 4*input, 4*-prediction);
  pop();

  noLoop();
}
