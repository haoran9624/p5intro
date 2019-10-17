let img;

let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;

let treesnow;

let mGraphic;

var mc=0;
var d=0;

var r1=0,r2=0,r3=0,r4=0,r5=0,r6=0,r7=0,r8=0;



var chc=0;

var x = new Array(100);
var y = new Array(100);
var speed = new Array(100);

var i=0;

var ele;

var bgc=color(255,30,30);

function preload(){
 
   img=loadImage('assets/cover.png');
   
   img1=loadImage('assets/1.png');
   img2=loadImage('assets/12.png');
   img3=loadImage('assets/4.png');
   img4=loadImage('assets/9.png');
   img5=loadImage('assets/7.png');
   img6=loadImage('assets/11.png');
   img7=loadImage('assets/5.png');
   img8=loadImage('assets/6.png');
   treesnow=loadImage('assets/snow-tree.png');

   ele = createAudio('assets/song.mp3');
  }

  
function setup(){
 mGraphic = createGraphics(1400,1800);
 
 createCanvas(1400, 1800);
 smooth();
 
 while(i<100){  
   x[i] = random(0, width);
   y[i] = -20;
   speed[i] = random(0.5, 5);
   i = i + 3;
  }
}



function draw(){
  background(40,100,10);
  
  mGraphic.beginShape();
  mGraphic.background(0); 
  mGraphic.ellipse(mouseX, mouseY,d,d); 
  mGraphic.endShape();

  img.mask(mGraphic);
  image(img,0,0);

  
  if(mc==1&&d<390){
    d=d+30;
  }
  
  if(mc==2&&d<5000){
    d=d+30;
    ele.autoplay(true)
    ele.loop(true)
  }
  
  if(mc>=3){
    background(bgc);
    image(treesnow,0,0);

    
    var i = 0;
    while(i < 100) {
      fill(255,random(150,180));
      noStroke();
      circle(x[i], y[i],random(10,20));
      y[i] = y[i] + speed[i];
      if(y[i]>1800) {
        y[i]=-20;
      }
      i= i+1;
    }
    
    push();
    strokeWeight(7);
    stroke(255);
    strokeJoin(ROUND);
    translate(700,300);
    rotate(PI/3.33);
    star(0,0,25,50,5);
    pop();
    
    resetMatrix();
    translate(600,720);
    if(r1==1){
      rotate(-PI*frameCount/100);
    }
    image(img1,-75,-75,150,150);
    
    
    resetMatrix();
    translate(740,880);
    if(r2==1){
      rotate(PI*frameCount/120);
    }
    image(img2,-110,-110,220,220);
    
    resetMatrix();
    translate(710,480);
    if(r3==1){
      rotate(PI*frameCount/100);
    }
    image(img3,-60,-60,120,120);
    
    resetMatrix();
    translate(770,650);
    if(r4==1){
      rotate(PI*frameCount/50);
    }
    image(img4,-85,-85,170,170);
    
    resetMatrix();
    translate(855,1135);
    if(r5==1){
      rotate(-PI*frameCount/100);
    }
    image(img5,-140,-140,280,280);
    
    resetMatrix();
    translate(530,940);
    if(r6==1){
      rotate(PI*frameCount/50);
    }
    image(img6,-80,-80,160,160);
    
    resetMatrix();
    translate(450,1200);
    if(r7==1){
      rotate(-PI*frameCount/90);
    }
    image(img7,-95,-95,190,190);
    
    resetMatrix();
    translate(610,1100);
    if(r8==1){
      rotate(PI*frameCount/80);
    }
    image(img8,-70,-70,140,140);  
  }
  
  resetMatrix();
  if(chc==0){
    fill(40,100,10);
    bgc=color(255,30,30);
  }else if(chc==1){
    fill(255,30,30);
    bgc=color(40,100,10);
  }
  noStroke();
  quad(120,0,200,0,0,200,0,120);
}

function mouseClicked(){
  mc++;
  if(dist(600,720,mouseX,mouseY)<75){
    r1=1;
  }else if(dist(740,880,mouseX,mouseY)<110){
    r2=1;
  }else if(dist(710,480,mouseX,mouseY)<60){
    r3=1;
  }else if(dist(770,650,mouseX,mouseY)<85){
    r4=1;
  }else if(dist(855,1135,mouseX,mouseY)<140){
    r5=1;
  }else if(dist(530,940,mouseX,mouseY)<80){
    r6=1;
  }else if(dist(450,1200,mouseX,mouseY)<95){
    r7=1;
  }else if(dist(610,1100,mouseX,mouseY)<70){
    r8=1;
  }else if(chc==0&&mouseX+mouseY<=200&&mouseX+mouseY>=120){
    chc=1;
  }else if(chc==1&&mouseX+mouseY<=200&&mouseX+mouseY>=120){
    chc=0;
  }
}