

var wind;
var position;
var input;

function setup(){
    createCanvas(720,200);

    var url="api.weatherstack.com/current?access_key=YOUR_ACCESS_KEY&query";
    loadJSON(url,gotweather);

    var button=select("#submit");
    button.mousePressed(askWeather);
    input=select("#city");

    position=createVector(width/2,height/2);
    wind=createVector();
}

function draw(){
    background(200);

    //Arrow pointing out thr eind direction
    push();
    translate(32,height-32);
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

    Pop();

    //Create a shape following the wind
    position.add(wind);

    stroke(0);
    fill(51);
    ellipse(position.x,position.y,16,16);

    if(position.x>width)position.x=0;
    if(position.x<0)position.x=width;
    if(position.y>heiht)position.y=0;
    if(position.y<0)position.y=height;
}

function askWeather(){

    //var url='api.weatherstack.com/current?access_key=YOUR_ACCESS_KEY&query=NewYork';
    
    var api="api.weatherstack.com/current?access_key=YOUR_ACCESS_KEY&query=";
    //var city="NewYork";
    var url=api+input.value();

    loadJSON(url,gotweather);

}

function gotWeather(){
    var angle=radians(Number(weather.current.wind_degree));
    var windmag=Number(weather.current.wind_speed);

    wind=p5.Vector.fromAngle(angle);

}