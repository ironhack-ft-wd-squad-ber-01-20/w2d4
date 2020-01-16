let marioImage;

function preload() {
  console.log("PRELOAD");
  // preload assets to make them available in the setup and onwards ONCE
  marioImage = loadImage("mario.png");
  // the setup function will wait for the preload to complete any loading operation
}

function setup() {
  // console.log("SETUP");
  // setup the canvas/our game ONCE
  createCanvas(800, 600); // width, height

  // frameRate(1);
}

// function draw() {
//   // console.log("DRAW");
//   // draws the canvas 60/s

//   stroke("black");

//   fill("red"); // fill(color) will fill the following shapes with a given color

//   circle(400, 300, 50); // x, y, diameter
//   // x, y define the position for the center of the circle

//   push(); // push creates a context
//   fill("green");
//   strokeWeight(0);

//   rect(100, 200, 50, 50); // x, y, w, h
//   // x, y define the position for the top left hand corner of the rectangle

//   rect(500, 100, 100, 50);

//   pop(); // pop closes the context

//   stroke("blue");
//   strokeWeight(10);
//   line(0, 300, 800, 300); // x1, y1, x2, y2
// }

// function draw() {
//   const bgColor = color(255, 204, 0);
//   background(bgColor);

//   // console.log("mouseIsPressed: ", mouseIsPressed);
//   // console.log("mouseX: ", mouseX);
//   // console.log("mouseY: ", mouseY);

//   if (mouseIsPressed) {
//     // console.log("mouse is pressed");
//     circle(mouseX, mouseY, 50);
//     // mouseX, mouseY are variables that give us the x & y position for the mouse
//   } else {
//     circle(400, 300, 100);
//   }
// }

function mouseClicked() {
  // called once on mouse release
  console.log("mouse clicked");
  fill("blue");
}

let rectX = 350;
let rectY = 250;

function draw() {
  clear();
  // const c = color(127, 100, 50);

  if (keyIsDown(38)) {
    // up arrow is currently down at this frame
    if (rectY >= 10) {
      rectY -= 10;
    }
  }
  if (keyIsDown(40)) {
    // down arrow is currently down at this frame
    if (rectY <= 600 - 100 - 10) {
      rectY += 10;
    }
  }
  if (keyIsDown(37)) {
    rectX -= 10;
  }

  fill(127);
  // rect(rectX, rectY, 100, 100);
  image(marioImage, rectX, rectY, 100, 100);
}

// function keyPressed() {
//   // called once on key press
//   console.log("key pressed", keyCode);
//   const step = 10;
//   if (keyCode === 37) {
//     // left arrow
//     rectX -= step;
//   } else if (keyCode === 39) {
//     // right arrow
//     rectX += step;
//   }
// }
