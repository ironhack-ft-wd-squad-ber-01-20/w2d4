function preload() {
  // console.log("PRELOAD");
  // preload assets to make them available in the setup and onwards ONCE
}

function setup() {
  // console.log("SETUP");
  // setup the canvas/our game ONCE
  createCanvas(800, 600); // width, height
  const bgColor = color(255, 204, 0);
  background(bgColor);
}

function draw() {
  // console.log("DRAW");
  // draws the canvas 60/s

  stroke("black");

  fill("red"); // fill(color) will fill the following shapes with a given color

  circle(400, 300, 50); // x, y, diameter
  // x, y define the position for the center of the circle

  push(); // push creates a context
  fill("green");
  strokeWeight(0);

  rect(100, 200, 50, 50); // x, y, w, h
  // x, y define the position for the top left hand corner of the rectangle
  pop(); // pop closes the context

  stroke("blue");
  strokeWeight(10);
  line(0, 300, 800, 300); // x1, y1, x2, y2
}
