//create an empty array called balls
let balls = [];

//create a variable to hold your avatar
let me;


function setup() {
  createCanvas(500, 400);

  //make one avatar called me
  me = new Avatar(width/2, 300, 3);

}

function draw(){
	background(236,226,255,100);

  me.drawMe();
  me.moveMe();

  if (frameCount % 25 == 0) {
      let  b = new Ball(width, random(0,height), -3);
      balls.push(b);
      console.log(balls); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].bounceBall();
	  }

}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the snowman
    		stroke("white");
        strokeWeight(2);
    		fill("white");
		    ellipse(this.x,this.y-7,30,30);
        ellipse(this.x,this.y+28,40,40);
        ellipse(this.x,this.y+73,50,50);
        fill("black");
        ellipse(this.x-4,this.y-9,5,5);
        ellipse(this.x+4,this.y-9,5,5);
        ellipse(this.x,this.y+30,5,5);
        ellipse(this.x,this.y+75,5,5);
        line(this.x-20,this.y+30,2,2,2,2);
        line(this.x+20,this.y+30,500,2);
        fill("brown");
        stroke("brown");
        rect(this.x-10,this.y-43,20,20);

	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
	}

  die(){

  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(157,237,255,100);
      strokeWeight(1);
    	fill("white");
		  ellipse(this.x,this.y,10,10);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speed;
		this.y = this.y+.5;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x-30 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+100){
      			this.speed = -this.speed;
    		}
  	}

}
