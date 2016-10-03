function setup() {

  createCanvas(400, 400);
  background(146, 255, 238, 160);

}

// moving clouds
var x3 = 300;
var y3 = 90;
var w = 30;
var h = 30;
var a = 10;
var x1speed = 3;
var y2speed = 1;

//triangle grass
var o, z, k, b, t;
b = 0, o = 200;
r = 100;
t = 0;

/*
//ball
var l1 = 310; //ball location
var l2 = 250; //ball location

var l1speed = 0;
var l2gravity = 0.2;
*/

function draw() {
/*
  //nobody
  fill(0);
  stroke(15);
  line(300, 200, 300, 400);
  ellipse(300, 200, 30, 30);
  line(300, 250, 250, 200);
  */



  //draw clouds
  background(146, 255, 238, 160);
  cloud(x3, y3, 30, 30);
  cloud(310 + a, 10, 30, 30);
  scale(0.8, 0.8);
  cloud(200 + a * 2, 20, 30, 30);
  x3 = x3 + 10;
  if (x3 > 450) {
    x3 = -80;
  }
  a = a + 20;
  if (a > 200) {
    a = -400;
  }

  // grass with varies height and color change, maybe try using array/for loop/draw randomly/custom function
  //left bush
  noStroke(0);
  fill('#A6FF39');
  triangle(o-120, 500, o- 80, 500, z-50 , k-50 );
   triangle(o-70, 400, o- 80, 500, z-30 , k-30 );
   triangle(o-50, 400, o-80, 500, z , k );
   

 
 


  grass(30, 40);
  grass(30, 30);
  grass(40, 100);
grass(30, 300);
  grass(20, 350);
  grass(40, 200);
  grass(60, 400);
  
     //right bush
noStroke(0);
  fill('#A6FF39');
  triangle(o, 550, o+100, 700, z+50, k+50 );
triangle(o, 600, o+80, 700, z+80, k+80 );
 triangle(o, 700, o+50, 700, z+100, k+100 );
  triangle(o, 700, o+50, 700, z+130, k+130 );
   triangle(o, 700, o+60, 800, z+140, k+140 );
 triangle(o, 700, o+50, 700, z+150, k+150 );


//farleft bush
 noStroke(0);
  fill('#A6FF39');
triangle(o-130, 450, 0- 40, 600, z-30 , k-30 );
triangle(o-200, 500, 0-50, 700, z-30 , k-30 );


   //setting up the coordinates of the third vertex, such that the vertex moves in an arc
  //triangle grass
  noStroke(0);
  fill('#A6FF39');

  z = o + 15 + r * sin(b); //here the o axis moves along a circle of r radius 
  k = 400 - r * cos(b); //here k axis moves along a circle of r radius
  triangle(o, 500, o + 30, 500, z, k);
  triangle(o, 500, o + 30, 500, z + 20, k + 20);
  triangle(o, 500, o + 30, 500, z - 20, k - 20);
  triangle(o, 500, o + 30, 500, z - 50, k - 40);

  b = 0.6 * t - 0.5 * 0.01 * t * t;
  t = t + 0.04;
  if (b > (PI / 5)) {
    t = 0;
    b = 0;

    
    /*
    noStroke();
colorMode(HSB, 100);
 ellipse(mouseX,mouseY,20,20);
for (q = 0; q < 100; q++) {
  for (q = 0; q < 100; q++) {
    stroke(q, j, 100);
    point(q, j);
   
    function mouseIsPressed(){
       background(146, 255, 238, 160);
    }
  }
  
  */

  }
/*
  //bouncing ball
  fill("#D81C0E");
  noStroke();
  ellipse(l1, l2, 15, 15);

  l1 = l1 + l1speed;
  l1speed = l1speed + l2gravity;

  if (l2 > height) {
    l1speed = l1speed * -1;

    l2 = height;
  }
  */
}



function cloud(x1, y2, w, h) {
  stroke(252);
  strokeWeight(3);
  fill(252);
  ellipse(x1 + 50, y2, w, h);
  ellipse(x1 + 20, y2, w, h);
  ellipse(x1 + 30, y2 + 19, w + 10, h + 10);
  ellipse(x1 + 70, y2 + 40, w + 20, h + 20);
  ellipse(x1 + 70, y2 + 10, w + 10, h + 10);
}


function grass(mx, g, s) { //mx=swing range,g=grassA& B point,s=scale)
  for (x = 0; x < 90; x += 10);
  frameRate(3.5); //simulate wind speed
  var offsetA = random(-mx, mx);
  var offsetB = random(-mx, mx);
  var c = color('hsla(120, 100%, 45%, 1)');
  stroke(c);
  strokeWeight(4); //grasswidth
  line(g + offsetA, 300, g + offsetB, 999);
  line(g + offsetA, 400, g + offsetB, 600);

}
