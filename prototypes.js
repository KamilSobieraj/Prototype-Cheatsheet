/*******************************Creating a prototype 

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


**********************************************************************************************/
/******************************* Prototype vs Istance members
 
function Circle(radius) {
  //Instance (own) members
  this.radius = radius;
  this.move = function() {
    console.log(`Move method`);
  };
}
//Prototype members
Circle.prototype.draw = function() {
  console.log(`Draw function constructor! ${this.radius}`);
};

const c1 = new Circle(10);

// Returns instance (own) members only
console.log(Object.keys(c1)); //(2) ["radius", "move"]

// Returns instance and prototype members
for (let key in c1) console.log(key); //radius move draw

console.log(c1.hasOwnProperty("draw")); // false, because it's prototype, not instance/own property



**********************************************************************************************/
