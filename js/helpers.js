var config = {
  fn: (x) => x,
};

// resize canvas when window is resized
function windowResized() {
  resizeCanvas(windowWidth * 0.8, windowHeight * 0.4);
  background(20, 20, 30);
}

// create X and Y axis
function createAxis() {
  stroke("rgb(35, 35, 53)");
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
}

// a simple function that draws a function
function drawFunction(f, s = 4) {
  push();
  stroke(200, 200, 200);

  fill(0, 0, 0, 0);
  strokeWeight(s);
  translate(width / 2, height / 2);
  beginShape();
  for (let x = -500; x < 500; x += 0.05) {
    let y = f(x);
    // reversing the y-sign as computer's y is positive towards bottom
    // whereas the Y-axis on books and graph paper is positive towards top
    curveVertex(x, -y);
  }
  endShape();
  pop();
}

// show mouseX mouseY coordinates
function showCoords() {
  translate(width / 2, height / 2);
  textSize(10);
  text(round(mouseX - width / 2) + ", " + -round(mouseY - height / 2), mouseX - width / 2 + 5, mouseY - height / 2 - 5);
}

// make the points using the dataset
function drawData(data) {
  let mid = Math.floor(data.length / 2);
  push();
  scale(1, -1);
  stroke("#FF6666");
  strokeWeight(10);
  for (let i = 0; i < mid; i++) {
    point(data[i][0], data[i][1]);
  }

  stroke("#66FFFF");
  for (let i = mid; i < data.length; i++) {
    point(data[i][0], data[i][1]);
  }
  pop();
}

function pause() {
  noLoop();
}
function resume() {
  loop();
}
