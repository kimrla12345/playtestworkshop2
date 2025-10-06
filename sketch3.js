let fishingGif;
let clickCount = 0;
let gameState = 'idle'; 

function preload() {
  fishingGif = loadImage('fishing.gif');
}

function setup() {
  createCanvas(384, 384);
  fishingGif.pause(); 
}

function draw() {
  background(135, 206, 235);

  
  if (gameState === 'playing' || gameState === 'finished') {
    image(fishingGif, 0, 0, 384, 384);

   
    if (gameState === 'playing' && fishingGif.getCurrentFrame() === fishingGif.numFrames() - 1) {
      gameState = 'finished';
      fishingGif.pause();     
    }
  } else { 
    
    textAlign(CENTER, CENTER);
    textSize(18);
    fill(255);
    text("Tap 10 times to fish 🎣", width / 2, height / 2);
  }
}

function mousePressed() {
 
  if (gameState === 'idle') {
    clickCount++;
    if (clickCount >= 10) {
      clickCount = 0;
      gameState = 'playing'; 
      fishingGif.play();
    }
  } else if (gameState === 'finished') {
    
    gameState = 'idle';
    fishingGif.reset(); 
  }
}