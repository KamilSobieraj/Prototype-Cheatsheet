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
/******************************* Prototype Inheritance

function Circle(radius) {
  this.radius = radius;
}
Circle.prototype.draw = function() {
  console.log(`Draw a circle with radius of ${this.radius}!`);
};

function Shape() {}
Shape.prototype.duplicate = function() {
  console.log("Shape method");
};

//Circle will inherit prototype from Shape
Circle.prototype = Object.create(Shape.prototype);
//Above there's a problem with constructor:
//Circle.prototype.constructor -> ƒ Shape() {}
//It is because we reassigned the constructor as well.
//The solution is to manually reassign back the constructor like:
Circle.prototype.constructor = Circle;

const c = new Circle(10);
const s = new Shape();
console.log(c.duplicate()); // Shape method



* **********************************************************************************************/
/******************************* Super/Call Constructor

function Shape(color) {
  this.color = color;
}
Shape.prototype.duplicate = function() {
  console.log("Shape method");
};

//We want to use color from Shape in a Circle
function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}
Circle.prototype.draw = function() {
  console.log(`Draw a circle with radius of ${this.radius}!`);
};

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

const s = new Shape();
const c = new Circle(10, "blue");
console.log(c.color); // blue



**********************************************************************************************/
