var rain = [];
var rainingNow = true;
var bgcolor = (0, 0, 0);

function setup() {
    println("wassup");
    createCanvas(displayWidth, displayHeight);
  
  
  
  for (i = 0; i < 100; i++) {
    rain[i] = new Rain(random(0, 1980), random(0, -2000));
  }
}

function draw() {
  background(bgcolor);
  ground();
  //Rain();


  //Check if it's raining or sunny
  if (rainingNow == true) {
    //background(100);
    for (i = 0; i < rain.length; i++) {
      rain[i].dropRain();
      rain[i].splash();
    }
  } else {
    background(255); 
  }
}

function ground() {
  //noStroke();
  fill(170, 150, 146, 240);
  rect(0, 530, 1980, 530);
}

function Rain(x, y) {
  this.x = x;
  this.y = y;
  this.gravity = 12;
  this.length = 3;
  this.r = 10;
  this.opacity = 200;


  this.dropRain = function() {
    noStroke();
    fill(155,195,255);
    ellipse(this.x, this.y, 3, this.length);
    this.y = this.y + 4 //+ frameCount/60;
    if (this.y > 540) {
      this.length = this.length - 5;
    }
    if (this.length < 0) {
      this.length = 0;
    }
  }

  this.splash = function() {
    strokeWeight(2);
    stroke(255, this.opacity);
    noFill();
    if (this.y > 540) {
      ellipse(this.x, 550, this.r * 2, this.r / 2);
      this.r++;
      this.opacity = this.opacity - 10;

      //keep the rain dropping
      if (this.opacity < 0) {
        this.y = random(0, -100);
        this.length = 15;
        this.r = 0;
        this.opacity = 200;
      }
    }
  }
}



function mousePressed() {
  rainingNow = false;
  //Change to white background
  bgcolor = (255);
}
  

function windowResized() {
  resizeCanvas(displayWidth, displayHeight);
}