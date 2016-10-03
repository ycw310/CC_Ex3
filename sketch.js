function setup() {

  createCanvas(400, 400);
  //background skyblue
  background(146, 255, 238, 160);

}


function draw() {
  // moving clouds
 /*
  var x1 = 300;
  var y2 = 90;
  var w = 30;
  var h = 30;

  var x1speed = 3;
  var y2speed = 1;

  if ((x1 > width) || (x1 > 0)) {
    x1speed = x1speed * 1;

    if ((y2 > height) || (y2 > 0)) {
      y2speed = y2speed * 2;
      */
    
    //draw clouds
    cloud(300, 90, 30, 30);
    cloud(310, 10, 30, 30);
    scale(0.8, 0.8);
    cloud(200, 20, 30, 30);


    // grass with varies height and color change, maybe try using array/for loop/draw randomly/custom function

    //var gray=int(random())
    var scalar = random(0.25, 1.5);
    grass(40, -40, scalar);
    grass(30, 30, scalar);
    grass(40, 100, scalar);
    grass(30, 300, scalar);
    grass(20, 350, scalar);
    grass(40, 200, scalar);

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
    for (x = 10; x > width > +50; x++);
    frameRate(25); //simulate wind speed
    var offsetA = random(-mx, mx);
    var offsetB = random(-mx, mx);
    var c = color('hsla(120, 100%, 45%, 0.1)');
    stroke(c);
    strokeWeight(4); //grasswidth
    line(g + offsetA, 200, g - offsetB, 399);
    scale(s); //set the scale 



  }