# Shape Class Hierarchy Assignment

This assignment involves designing and implementing a class hierarchy for representing different shapes using Object-Oriented Programming principles in JavaScript.

## Files

- `shape.js`: Defines the base `Shape` class and its derived classes (`Circle`, `Rectangle`, `Triangle`).
- `main.js`: Demonstrates the usage of the shape class hierarchy with example instances and method invocations.
- `README.md`: Documentation file explaining the class design, attributes, methods, and usage instructions.

## Shape Class Hierarchy

### `Shape` Class

The `Shape` class is the base class for all shapes and defines common attributes and abstract methods:

- `color`: Represents the color of the shape.
- `calculateArea()`: Abstract method to calculate the area of the shape (to be overridden by derived classes).
- `calculatePerimeter()`: Abstract method to calculate the perimeter of the shape (to be overridden by derived classes).
- `describe()`: Method to describe the shape with its color.

### Derived Classes

#### `Circle`, `Rectangle`, `Triangle`

Each derived class inherits from `Shape` and provides specific implementations for `calculateArea()` and `calculatePerimeter()` methods tailored to the respective shape.