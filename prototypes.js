/*******************************Creating a prototype */
function Circle(radius) {
  this.radius = radius;
  // this.draw = function() {
  //   console.log(`Draw function constructor! ${this.radius}`);
  // };
}
//We're moving draw method to prototype to save some space in memory - every Circle object willinherit it
Circle.prototype.draw = function() {
  console.log(`Draw function constructor! ${this.radius}`);
};

const c1 = new Circle(10);
const c2 = new Circle(5);
c1.draw();
c2.draw();
