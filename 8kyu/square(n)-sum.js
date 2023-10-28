// DESCRIPTION:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9

// SOLUTION:

function squareSum(numbers){
    return numbers.reduce((acc, item) => acc + item**2, 0);
  }

console.log(squareSum([1, 2, 2]));
