var guess = Math.random();
var data = [
  [20, 100],
  [30, 110],
	[55, 50],
  [70, 60],
];

function setup() {
  let canvas = createCanvas(windowWidth * 0.8, windowHeight * 0.4);
  canvas.parent("main");
}

function draw() {
  background(20, 20, 30);
  fill(255);
  createAxis();
  showCoords();

  drawData(data);
  predictron(data);
}

function predictron(data) {
  let random_index = round(random(0, data.length - 1));
  let input = data[random_index][0];
  let answer = data[random_index][1];
  let learningRate = 0.01; // making the learning rate one, makes the line cross over all the points
	let prediction = guess * input

  let error = answer - prediction;
  let delta = learningRate * (error / input);
  guess = guess + delta;

  push();
  stroke(0, 255, 255);
  strokeWeight(3);
  line(0, 0, 200, -200 * guess);
  pop();
}

// var data = [
//   [20, 100],
//   [30, 110],
// 	[33, 115],
// 	[55, 75],
// 	[55, 50],
//   [70, 60],
// 	[72, 65],
// 	[78, 70]
// ];
