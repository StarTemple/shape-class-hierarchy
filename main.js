// Import shape classes from shape.js
const { Shape, Circle, Rectangle, Triangle } = require('./shape');

// Create instances of different shapes
const circle = new Circle('red', 5);
const rectangle = new Rectangle('blue', 4, 6);
const triangle = new Triangle('green', 3, 4, 5);

// Demonstrate shape methods
console.log(circle.describe());
console.log(`Circle Area: ${circle.calculateArea()}`);
console.log(`Circle Perimeter: ${circle.calculatePerimeter()}`);

console.log(rectangle.describe());
console.log(`Rectangle Area: ${rectangle.calculateArea()}`);
console.log(`Rectangle Perimeter: ${rectangle.calculatePerimeter()}`);

console.log(triangle.describe());
console.log(`Triangle Area: ${triangle.calculateArea()}`);
console.log(`Triangle Perimeter: ${triangle.calculatePerimeter()}`);