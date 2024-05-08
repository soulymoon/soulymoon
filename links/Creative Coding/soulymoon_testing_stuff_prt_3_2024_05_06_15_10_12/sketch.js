let mySound;
var nums=[56,58,26,36,75,85,85,96,36,56,85,75,25,36,56,156];
var lines=[153,26,86,0,63];




function setup() {
  let cnv=createCanvas(600,600);
  cnv.mousePressed(canvasPressed);
  }

function draw() {
  background(random(0),(0),(0))
  //
  stroke(255);
  noFill();
  for (var i=0; i<5; i++) {
  rect(random(500),random(500),nums [i],nums [i]);
 }
}

  
function canvasPressed (){
  mySound.play ();
  //
}