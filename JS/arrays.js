// Arrays

/**
 * Represents an array of numbers.
 * @type {number[]}
 */
const numbers = [0, 1, 2, 3, 4, 5];

/**
 * Represents the days of the week.
 * @type {string[]}
 */
let daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

console.log(daysOfWeek);

// Discover the first 20 numbers from the Fibonacci sequence

/**
 * Represents an array to store Fibonacci numbers.
 * @type {number[]}
 */
const fibonacci = [0, 1];

for (let i = 2; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

/**
 * Print the Fibonacci sequence.
 */
for (let i = 1; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
}
