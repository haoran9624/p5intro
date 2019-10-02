let bug

function setup(){
    createCanvas(720,480);
    //initialize a new object with jitter class
    bug=new jitter();
}

function draw(){
    background(50,89,100);
    //display the object
    bug.display();
    //move the object
    bug.move();
}

//create a class called jitter
class jitter{
    constructor(){
        //x position,y position,diameter,speed
        this.x=random(width);
        this.y=random(height);
        this.diameter=(10,30);
        this.speed=10;
    }

    display(){
        ellipse(this.x,this.y,this.diameter,this.diameter);
    }

    move(){
        this.x+=random(-this.speed,this.speed);
    }
}