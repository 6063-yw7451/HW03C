function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(255);
  strokeWeight(2);
  stroke(0);

  for (let i = 0; i < 600; i++) {
    let px1 = random(width);
    let py1 = random(height);
    let px2 = px1 + random(-400, 400);
    let py2 = py1 + random(-400, 400);
    point(px1, py1);
    point(px2, py2);
    line(px1, py1, px2, py2);
  }
}