// A wind direction vector

var wind;
var position;
var input;
let bgcolor=200;
var g;
var b;

function setup(){
  createCanvas(720,720);

  var url = 'http://api.weatherstack.com/current?access_key=2c1d09c44f36388fc54656fd9d59803d&query=London';
  loadJSON(url, gotWeather);

  var button = select('#submit');
  button.mousePressed(askWeather);
  input = select('#city');

  position = createVector(width/2, height/2);
  wind = createVector();
}

function draw(){
  background(bgcolor);

  strokeWeight(1);
  stroke(0);
  for(let a=0;a<=720;a+=10){
    for(let b=-10;b<=720;b+=10){
      rect(a,b,a+30,b+30);
      fill(a/2,g,b);
      
    }
  }

  // Arrow pointing out the wind direction
  push();
  translate(60,height-60);
  //insert a variable
  rotate(wind.heading()+PI/2);

  noStroke();
  fill(255);
  ellipse(0,0,48,48);

  stroke(45,123,182);
  strokeWeight(3);
  line(0,-16,0,16);

  noStroke();
  fill(45,123,182);
  triangle(0,-18,-6,-10,6,-10);

  pop();

  // Create a shape following the wind
  position.add(wind);

  stroke(255);
  strokeWeight(3);
  fill(45,123,182);
  
  //ellipse(position.x, position.y, 16,16);
    
  rect(position.x,position.y,30,30);
  rotate(PI/2);
  
    if(position.x > width) position.x = 0;
    if(position.x < 0) position.x = width;
    if(position.y > height) position.y = 0;
    if(position.y < 0) position.y = height;
    
}

function askWeather(){
  // Get data from weatherstack.com
  //var url = 'http://api.weatherstack.com/current?access_key=bea4af6c1510c5f3935b58dfd760c015&query=London';
  
  var api = 'http://api.weatherstack.com/current?access_key=2c1d09c44f36388fc54656fd9d59803d&query=';
  // var city = 'London';
  var url = api + input.value();

  loadJSON(url,gotWeather);
}

function gotWeather(weather){
  var angle = radians(Number(weather.current.wind_degree));

  var windmag = Number(weather.current.wind_speed);

  var temperature=Number(weather.current.temperature);


  wind = p5.Vector.fromAngle(angle);
 
  g=temperature*5;
  b=temperature*10;


  // if(temperature <= 5){
  //   g=50;
  //   b=50;

  // } 

  // else if(temperature > 5 && temperature <= 10){
  //   g=100;
  //   b=80;

  // } 

  // else if(temperature > 10 && temperature <= 80){
  //   g=130;
  //   b=200;

  // } 

  // else if(temperature > 80){
  //   g=200;
  //   b=220;

  // } 
}