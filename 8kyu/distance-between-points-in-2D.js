// DESCRIPTION:
// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have attributes x and y.

// Write a function calculating distance between Point a and Point b.

// Input coordinates fit in range −50 ⩽ x,y ⩽ 50
// Tests compare expected result and actual answer with tolerance of 1e-6.

// SOLUTION:

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const a = new Point(3, 3);
const b = new Point(3, 3);

const a1 = new Point(4, 6);
const b1 = new Point(-3, 2);

function distanceBetweenPoints(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
}

console.log(distanceBetweenPoints(a, b));
console.log(distanceBetweenPoints(a1, b1));

