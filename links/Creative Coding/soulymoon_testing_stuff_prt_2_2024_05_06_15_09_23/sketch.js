let sound, amplitude;
let img;
let c;

function preload(){
  sound = loadSound("Track1.mp3");
}

function setup() {
  let cnv = createCanvas(600,600,WEBGL);
  cnv.mouseClicked(togglePlay);
  amplitude = new p5.Amplitude();
}

function draw() {
  background(0);
  //
  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 10);
  noFill();
  stroke(0);
  box(290,250,0,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  //
  noFill();
  stroke(15, 245, 22);
  box(490,480,0,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  //
  noFill();
  stroke(15, 245, 22);
  box(470,460,0,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  //
   noFill();
  stroke(15, 245, 22);
  box(450,450,0,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  //
   noFill();
  stroke(15, 245, 22);
  box(440,430,0,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  //
  noFill();
  stroke(15, 245, 22);
  box(420,410,0,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  //
  noFill();
  stroke(15, 245, 22);
  box(400,390,0,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  //
  noFill();
  stroke(15, 245, 22);
  box(390,380,0,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  //
  noFill();
  stroke(15, 245, 22);
  box(380,370,0,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  //
  noFill();
  stroke(15, 245, 22);
  box(360,320,0,size);
  rotateX(millis()/6000);
  rotateY(millis()/6000);
  //
  noFill();
  stroke(15, 245, 22);
  box(270,260,0,size);
  //
  noFill();
  stroke(15, 245, 22);
  box(100,100,0,size);
 
  
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