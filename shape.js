// Shape class (base class)
class Shape {
    constructor(color) {
        this.color = color;
    }

    // Abstract methods (to be overridden by derived classes)
    calculateArea() {
        throw new Error('Method not implemented');
    }

    calculatePerimeter() {
        throw new Error('Method not implemented');
    }

    // Method to describe the shape
    describe() {
        return `This shape is ${this.color}.`;
    }
}

// Derived classes: Circle, Rectangle, Triangle

// Circle class
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius ** 2;
    }

    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

// Rectangle class
class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

// Triangle class
class Triangle extends Shape {
    constructor(color, side1, side2, side3) {
        super(color);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    calculateArea() {
        // Using Heron's formula to calculate the area of a triangle
        const s = (this.side1 + this.side2 + this.side3) / 2;
        return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
    }

    calculatePerimeter() {
        return this.side1 + this.side2 + this.side3;
    }
}

// Export classes for use in main program
module.exports = {
    Shape,
    Circle,
    Rectangle,
    Triangle
};