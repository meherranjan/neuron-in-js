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

class Perceptron {
  constructor(n) {
    this.weights = new Array(n).fill(random(-1, 1));
    this.learning = 0.01;
  }

  feedforward(inputs) {
    let sum = 0;
    let w = this.weights;
    for (let i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * w[i];
    }
    return activation(sum);
  }

  activation(sum) {
    return sum > 0 ? 1 : -1;
  }

  train(inputs, answer) {
    let guess = this.feedforward(inputs);
    let error = answer - guess;
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] += this.learning * error * inputs[i];
    }
  }
}
// https://editor.p5js.org/mcb419/sketches/vLKZm9xts
