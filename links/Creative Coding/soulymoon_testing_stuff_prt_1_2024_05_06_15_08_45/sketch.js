let sound, amplitude;
let c;
let synth, soundLoop;


function preload(){
  sound = loadSound("ES_Alien Transmission 1 - SFX Producer.mp3");
}
function setup() {

  let cnv = createCanvas(600,600,WEBGL);
  

  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  cnv.mouseClicked(togglePlay);
  amplitude = new p5.Amplitude();
}

function draw() {
  //back
  background (0);
  
  //amp

  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 200);
  //box
  noFill();
  stroke(15, 245, 22);
  box(900,600,size);
  rotateZ(millis()/1000);
  //second box
  noFill();
  stroke(15, 245, 22);
  box(800,500,size);
  //third box
    noFill();
  stroke(15, 245, 22);
  box(700,400,size)
  
  //fourth box
      noFill();
  stroke(15, 245, 22);
  //fifth box
    noFill();
  stroke(15, 245, 22);
  box(500,200,size);
  //six
      noFill();
  stroke(15, 245, 22);
  box(400,100,size);
  //seven
      noFill();
  stroke(15, 245, 22);
  box(300,50,size);
  box(mouseX, mouseX, 100);
  //eight
  noFill();
  stroke(15, 245, 22);
  box(200,100,size);
  //nine
  noFill();
  stroke(15, 245, 22);
  box(100,100,size);
  //ten
  noFill();
  stroke(15, 245, 22);
  box(50,50,size);
  //eleven
  noFill();
  stroke(15, 245, 22);
  box(600,500,size);
  
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