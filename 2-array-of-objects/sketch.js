
//create an empty array called balls

let balls = [];
let triangles= [];
let squares= [];

function setup() {
  createCanvas(900, 600);

}

function draw(){
	background(189,180,255,100);

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].moveBall();
      triangles[i].drawBall();
      triangles[i].moveBall();
      squares[i].drawBall();
      squares[i].moveBall();
	  }
}

function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
  let  b = new Ball(100, 100);
  let c = new Triangle(300,300);
  let d= new Square(500,200)
  balls.push(b);
  console.log(balls);
  triangles.push(c);
  console.log(triangles);
  squares.push(d);
  console.log(squares);
}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
	}

	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill("blue");
		    ellipse(this.x,this.y,40,40);
	}

	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+2;
		this.y = this.y+.5;
	}}

  class Triangle {

  	constructor(x,y){ //every ball needs an x value and a y value
  		    this.x = x;
      		this.y = y;

          // if (this.x===800) {
          //   this.speed-this.speed;
          // }
          // if (this.x===400) {
          //   this.speed-this.speed;
          // }
          }


  	drawBall(){  // draw a ball on the screen at x,y
      		stroke(0);
      		fill("purple");
  		    ellipse(this.x,this.y,10,10);
  	}

  	moveBall(){ //update the location of the ball, so it moves across the screen
  		this.x = this.x+10;
  		this.y = this.y+30;

}}
class Square {

  constructor(x,y,speed){ //every ball needs an x value and a y value
        this.x = x;
        this.y = y;
        this.speed = speed;

}

  drawBall(){  // draw a ball on the screen at x,y
        stroke(8);
        fill("yellow");
        ellipse(this.x,this.y,50,25);
  }

  moveBall(){ //update the location of the ball, so it moves across the screen
    if (this.x>300) {
      this.speed=-this.speed;
    }


    this.x = this.x+this.speed;
    this.y = this.y+4;
}
}
