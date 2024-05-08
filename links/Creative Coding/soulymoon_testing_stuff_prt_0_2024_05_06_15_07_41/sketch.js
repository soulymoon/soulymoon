

let sound, amplitude;
let img;
let c;
let bg;


function preload(){
  sound = loadSound("Ketsa - Sinkholes.mp3");
}
function setup() {

  let cnv = createCanvas(400,300,WEBGL);
  
  cnv.mouseClicked(togglePlay);
  amplitude = new p5.Amplitude();
}

function draw() {
  //back
  background (256);
  
  //amp

  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 200);


  
  //fourth box
  noFill();
  stroke(15, 245, 22);
  circle(10,100,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  //fifth box
  noFill();
  stroke(15, 245, 22);
  circle(10, 90,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
  noFill();
  stroke(15, 245, 22);
  circle(10, 80, size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
 
  //
  noFill();
  stroke(15, 245, 22);
  circle(10, 70,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
    noFill();
  stroke(15, 245, 22);
  circle(10, 60,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
 
  //
    noFill();
  stroke(15, 245, 22);
  circle(10, 50,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
   noFill();
  stroke(15, 245, 22);
  circle(10, 40,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
  noFill();
  stroke(15, 245, 22);
  circle(10, 30,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
  noFill();
  stroke(15, 245, 22);
  circle(10, 20,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
 
  //
  noFill();
  stroke(15, 245, 22);
  circle(10, 10,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
 
  //
  noFill();
  stroke(15, 245, 22);
  circle(10,5,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  
  ///
  
   noFill();
  stroke(15, 245, 22);
  circle(30,100,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //fifth box
  noFill();
  stroke(15, 245, 22);
  circle(30, 90,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
  noFill();
  stroke(15, 245, 22);
  circle(30, 80, size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
  noFill();
  stroke(15, 245, 22);
  circle(30, 70,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
    noFill();
  stroke(15, 245, 22);
  circle(30, 60,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
    noFill();
  stroke(15, 245, 22);
  circle(30, 50,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
   noFill();
  stroke(15, 245, 22);
  circle(30, 40,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
 
  //
  noFill();
  stroke(15, 245, 22);
  circle(30, 30,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
  noFill();
  stroke(15, 245, 22);
  circle(30, 20,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
  noFill();
  stroke(15, 245, 22);
  circle(30, 10,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
  noFill();
  stroke(15, 245, 22);
  circle(30,5,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  ///
    noFill();
  stroke(15, 245, 22);
  circle(20,100,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
    noFill();
  stroke(15, 245, 22);
  circle(20,90,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
   noFill();
  stroke(30,245, 22);
  circle(20,80,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
  noFill();
  stroke(15, 245, 22);
  circle(20,70,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
  noFill();
  stroke(15, 245, 22);
  circle(20,60,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
  noFill();
  stroke(15, 245, 22);
  circle(20,50,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
  noFill();
  stroke(15, 245, 22);
  circle(20,40,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
    noFill();
  stroke(15, 245, 22);
  circle(20,30,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
  noFill();
  stroke(15, 245, 22);
  circle(20,20,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
  noFill();
  stroke(15, 245, 22);
  circle(20,10,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
  noFill();
  stroke(15, 245, 22);
  circle(20,5,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  
  ////
  
   noFill();
  stroke(15, 245, 22);
  circle(40,100,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
  noFill();
  stroke(15, 245, 22);
  circle(40,90,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
    noFill();
  stroke(15, 245, 22);
  circle(40,80,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
    noFill();
  stroke(15, 245, 22);
  circle(40,90,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
   noFill();
  stroke(15, 245, 22);
  circle(40,80,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
  noFill();
  stroke(15, 245, 22);
  circle(40,70,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
  noFill();
  stroke(15, 245, 22);
  circle(40,60,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
  noFill();
  stroke(15, 245, 22);
  circle(40,50,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
  noFill();
  stroke(15, 245, 22);
  circle(40,40,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  ///
    noFill();
  stroke(15, 245, 22);
  circle(40,30,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
    noFill();
  stroke(15, 245, 22);
  circle(40,20,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
   noFill();
  stroke(30,245, 22);
  circle(40,10,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
  noFill();
  stroke(15, 245,22);
  circle(40,5,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  /////
    noFill();
  stroke(15, 245, 22);
  circle(50,100,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
    noFill();
  stroke(15, 245, 22);
  circle(50,90,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
   noFill();
  stroke(30,245, 22);
  circle(50,80,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
  noFill();
  stroke(15, 245,22);
  circle(50,70,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
   noFill();
  stroke(15, 245,22);
  circle(50,60,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
   noFill();
  stroke(15, 245,22);
  circle(50,50,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
   noFill();
  stroke(15, 245,22);
  circle(50,40,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
   noFill();
  stroke(15, 245,22);
  circle(50,30,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
   noFill();
  stroke(15, 245,22);
  circle(50,20,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
   noFill();
  stroke(15, 245,22);
  circle(50,10,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  
  
  //////
     noFill();
  stroke(15, 245, 22);
  circle(40,30,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  
  //
    noFill();
  stroke(15, 245, 22);
  circle(40,20,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
   noFill();
  stroke(30,245, 22);
  circle(40,10,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
  noFill();
  stroke(15, 245,22);
  circle(40,5,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  

  
  
  //
   noFill();
  stroke(30,245, 22);
  circle(50,80,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
  noFill();
  stroke(15, 245,22);
  circle(50,70,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
   noFill();
  stroke(15, 245,22);
  circle(50,60,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
   noFill();
  stroke(15, 245,22);
  circle(50,50,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  //
   noFill();
  stroke(15, 245,22);
  circle(50,40,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  
  //
   noFill();
  stroke(15, 245,22);
  circle(50,30,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  
  
  


  
  
  //
  
  
  
  
  
}

function togglePlay() {
  if (sound.isPlaying() ){
    sound.pause();
  } else {
    sound.loop();
		amplitude = new p5.Amplitude();
		amplitude.setInput(sound);
  }
}