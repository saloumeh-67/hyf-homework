// First add the canvas element to your html. Now draw a circle on the canvas using js

const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 70;

context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
//filling it out so it has a color.
context.fillStyle = randomColor();
context.fill();
context.lineWidth = 8;
context.strokeStyle = randomColor();
context.stroke();
///part 2
//Lets create a class called Circle. The circle should be used like this:

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    context.fillStyle = randomColor();
    context.fill();
    context.strokeStyle = randomColor();
    context.closePath();
  }
}
const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI);
c1.draw();
const c2 = new Circle(100, 100, 30, 0, 2 * Math.PI);
c2.draw();
//generates a random color
function randomColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}
randomColor();

// it could be really nice to have some help on this part I couldn't really understand it I just copy from 'stackoverflow':(
    //////// Every 100ms create a new circle instance and draw that to the canvas.
   // generate a random size for EVERY circle 
function manyCircles() {
    function xHorizontalRandomPosition() {
        const x = Math.floor(Math.random() * 1200);
        return x
    }
    function yVerticalRandomPosition() {
        const y = Math.floor(Math.random() * 600);
        return y
    }
    function radius() {
        const r = Math.floor(Math.random() * 100);
        return r
    }
    setInterval(() => {
        const randomCircles = new Circle(xHorizontalRandomPosition(),
         yVerticalRandomPosition(), radius(), 0, 2 * Math.PI)
        randomCircles.draw()
    }, 100);
}
//manyCircles();
//moving after curser
myCanvas.addEventListener('mousemove',function myFunction(e) {
    function radius() {
        const r = Math.floor(Math.random() * 70);
        return r
    }
    let x = e.clientX;
    let y = e.clientY;
    const randomCircles = new Circle(x, y, radius(), 0, 2 * Math.PI)
    randomCircles.draw()
  })

