// fetch("https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/q=fools_troye&index=0&limit=2&output=json", {
//  "method": "GET",
//  "headers": {
//   "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
//     "x-rapidapi-key": "f018554024msh79f377fd183f36cp14fc43jsn0ed03be0feba"
//     //"x-rapidapi-key": "6f4c8e99360bd47b75f4facc3c6d62e6"
//  }
// })
// .then(response => {
//  console.log(response);
// })
// .catch(err => {
//  console.log(err);
// });


var song, fft;
var b;

var tx =[]; 
var ty = []; 
var big = []; 
var a = 0;
var r = 0;

function askData(){

  // song=loadSound(data.data[0].preview,loaded);

  // fft.setInput(song);
  var api="https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/?q=";

  var c="&index=0&limit=2&output=json";

  var url = api + input.value()+c;

  loadJSON(url,gotData);
}

function gotData(data){
  song=loadSound(data.data[0].preview,loaded);
  fft.setInput(song);
}


function setup() {
  var url = "https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/?q=fools_troye&index=0&limit=2&output=json";
  loadJSON(url,gotData);

  var button = select('#submit');
  button.mousePressed(askData);
  input = select('#search');

  createCanvas(1500, 1000);

  colorMode(HSB);

  fft = new p5.FFT();

  for (var i = 0; i < 512; i++) {
    tx[i] = 750+cos(r)*600;
    ty[i] = sin(r)*600-8;
    r+=2*PI/1024;
  }
}

function loaded(){
  song.play();
}

function mousePressed() {
  if(mouseY<900||mouseY>940){
    if ( song.isPlaying() ) { // .isPlaying() returns a boolean
      song.pause();
      background(255, 0, 0);
    } else {
      song.play(); // playback will resume from the pause position
      background(0, 255, 0);
    }
  }

}

function draw() {
  background(0);

  var spectrum = fft.analyze();

  var w = -0.5*PI/1024;

  
  strokeWeight(2);//线宽
  for (var i = 1; i <1024; i++) {
    big[i] = spectrum[i];
  }
  for (var i = 0; i <512; i++) {
    strokeCap(ROUND);

    stroke(i/3+60, 255, 255,0.2);
    line(tx[i]/3+500-big[i/2]*0.3*cos(w), ty[i]/3-big[i/2]*0.3*sin(w), tx[i]/3+500+big[i/2]*0.3*cos(w), ty[i]/3+big[i/2]*0.3*sin(w))
    
    stroke(i/3+60, 255, 255,0.7);
    line(tx[i]*0.6+300-big[i/2]*0.6*cos(w), ty[i]*0.6-big[i/2]*0.6*sin(w), tx[i]*0.6+300+big[i/2]*0.6*cos(w), ty[i]*0.6+big[i/2]*0.6*sin(w));
    
    stroke(i/3+60, 255, 255,1);
    line(tx[i]-big[i]*1.2*cos(w), ty[i]-big[i]*1.2*sin(w), tx[i]+big[i]*1.2*cos(w), ty[i]+big[i]*1.2*sin(w));//线条
    
    w+=2*PI/1024;//增加
  }  
}

// function keyPressed() {
//   if (keyCode === LEFT_ARROW) {
//     value = 255;
//   } else if (keyCode === RIGHT_ARROW) {
//     value = 0;
//   }
// }