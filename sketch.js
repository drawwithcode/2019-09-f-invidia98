var move = 50;
var circlex = 80;
var circley = 80;
var rettangoli = [];
var palla;
var xcor;
var ycor;
var win;
var d;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(LEFT, CENTER)

  for (var i = 0; i < 40; i++) {
    rettangoli[i] = new Rettangolo(i);
    rettangoli[i].coordinate();

  }
  frameCount = 300;




}

function draw() {
  background('black');

  fill(255);
  xcor = map(rotationY, -30, 30, 51, width - 50);
  ycor = height - 40;
  palla = circle(xcor, ycor, 25)

  for (var i = 0; i < 40; i++) {

    rettangoli[i].display();

  }


  win = circle(width / 2, -rettangoli[39].y, 50)

  d = dist(xcor, ycor, width / 2, -rettangoli[39].y)
  if (d < 25) {
    fill(255, 0, 0)
    textAlign(CENTER)
    text("congrat", width / 2, 50);
    noLoop();
    location.reload();
  }
}


  function Rettangolo(y) {



    this.coordinate = function() {
      this.x = 0;
      this.y = y * (320 + y / 0.5);
      this.y2 = y * (320 + y / 0.5) + (160 + y / 0.5);
      this.width = random(100, width - 50);
      this.height = 20;

    }

    this.display = function() {
      this.y -= frameCount / 300
      this.y2 -= frameCount / 300
      fill('red');
      rect(this.x, height - this.y, this.width, 20);
      fill('red');
      rect(width - this.width, height - this.y2, this.width, 20);
      if (xcor <= this.width && height - this.y <= height - 40 && height - this.y + this.height >= height - 40) {
        noLoop();
        location.reload();
      }
      if (xcor >= width - this.width && height - this.y2 <= height - 40 && height - this.y2 + this.height >= height - 40) {
        noLoop();
        location.reload();
      }


    }
  }


  function touchEnded(event) {
    DeviceOrientationEvent.requestPermission()
  }
