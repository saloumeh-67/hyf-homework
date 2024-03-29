class Circle {
    constructor(radius) {
      this.radius = radius;
    }

    getDiameter() {
      const diameter = 2 * this.radius;
      console.log(diameter);
    }
  
    getCircumference() {
      const circumference = 2 * Math.PI * this.radius;
      console.log(circumference);
    }
  
    getArea() {
      const area = Math.PI * this.radius * this.radius;
      console.log(area);
    }
  }
  
  const circle = new Circle(10);
  circle.getDiameter(); // 20
  circle.getCircumference();
  circle.getArea();