var C4;


function preload(){
  soundFormats('mp3');
  C4=loadSound('../assets/C4.mp3');
  D4=loadSound('../assets/D4.mp3');
  E4=loadSound('../assets/E4.mp3');
  F4=loadSound('../assets/F4.mp3');
  G4=loadSound('../assets/G4.mp3');
  A4=loadSound('../assets/A4.mp3');
  B4=loadSound('../assets/B4.mp3');

  C5=loadSound('../assets/C5.mp3');
  D5=loadSound('../assets/D5.mp3');
  E5=loadSound('../assets/E5.mp3');
  F5=loadSound('../assets/F5.mp3');
  G5=loadSound('../assets/G5.mp3');
  A5=loadSound('../assets/A5.mp3');
  B5=loadSound('../assets/B5.mp3');
}


function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(0);
  
  fill(255);
  if(mouseIsPressed){
    if(mouseX<100&&mouseX>50&&mouseY<300&&mouseY>100){
      fill(250,250,170);
      C4.play();
    }
  }
  rect(50,100,50,200);
  
  fill(255);
  if(mouseIsPressed){
    if(mouseX<150&&mouseX>100&&mouseY<300&&mouseY>100){
      fill(250,250,170);
      D4.play();
    }
  }
  rect(100,100,50,200);
  
  fill(255);
  if(mouseIsPressed){
    if(mouseX<200&&mouseX>150&&mouseY<300&&mouseY>100){
      fill(250,250,170);
      E4.play();
    }
  }
  rect(150,100,50,200);
  
  fill(255);
  if(mouseIsPressed){
    if(mouseX<250&&mouseX>200&&mouseY<300&&mouseY>100){
      fill(250,250,170);
      F4.play();
    }
  }
  rect(200,100,50,200);
  
  fill(255);
  if(mouseIsPressed){
    if(mouseX<300&&mouseX>250&&mouseY<300&&mouseY>100){
      fill(250,250,170);
      G4.play();
    }
  }
  rect(250,100,50,200);
  
  fill(255);
  if(mouseIsPressed){
    if(mouseX<350&&mouseX>300&&mouseY<300&&mouseY>100){
      fill(250,250,170);
      A4.play();
    }
  }
  rect(300,100,50,200);
  
  fill(255);
  if(mouseIsPressed){
    if(mouseX<400&&mouseX>350&&mouseY<300&&mouseY>100){
      fill(250,250,170);
      B4.play();
    }
  }
  rect(350,100,50,200);

  fill(0);
  rect(83,100,34,135);
  rect(133,100,34,135);
  rect(233,100,34,135);
  rect(283,100,34,135);
  rect(333,100,34,135);
  

  fill(255);
  if(mouseIsPressed){
    if(mouseX<450&&mouseX>400&&mouseY<300&&mouseY>100){
      fill(250,250,170);
      C5.play();
    }
  }
  rect(400,100,50,200);
  
  fill(255);
  if(mouseIsPressed){
    if(mouseX<500&&mouseX>450&&mouseY<300&&mouseY>100){
      fill(250,250,170);
      D5.play();
    }
  }
  rect(450,100,50,200);
  
  fill(255);
  if(mouseIsPressed){
    if(mouseX<550&&mouseX>500&&mouseY<300&&mouseY>100){
      fill(250,250,170);
      E5.play();
    }
  }
  rect(500,100,50,200);
  
  fill(255);
  if(mouseIsPressed){
    if(mouseX<600&&mouseX>550&&mouseY<300&&mouseY>100){
      fill(250,250,170);
      F5.play();
    }
  }
  rect(550,100,50,200);
  
  fill(255);
  if(mouseIsPressed){
    if(mouseX<650&&mouseX>600&&mouseY<300&&mouseY>100){
      fill(250,250,170);
      G5.play();
    }
  }
  rect(600,100,50,200);
  
  fill(255);
  if(mouseIsPressed){
    if(mouseX<700&&mouseX>650&&mouseY<300&&mouseY>100){
      fill(250,250,170);
      A5.play();
    }
  }
  rect(650,100,50,200);
  
  fill(255);
  if(mouseIsPressed){
    if(mouseX<750&&mouseX>700&&mouseY<300&&mouseY>100){
      fill(250,250,170);
      B5.play();
    }
  }
  rect(700,100,50,200);
  
  fill(0);
  rect(433,100,34,135);
  rect(483,100,34,135);
  rect(583,100,34,135);
  rect(633,100,34,135);
  rect(683,100,34,135);
  
}