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

// Adding element to the end of the array

numbers[numbers.length] = 10;
console.log(numbers);

// Adding element to the end of the array with push

numbers.push(11);
numbers.push(12, 13);

// Insert element at the first position of the array

/**
 * Inserts a value at the beginning of the array.
 * @param {any} value - The value to be inserted.
 */
Array.prototype.insertFirstPosition = function (value) {
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];
    }

    this[0] = value;
}

// Using the unshift method to insert element at the first position of the array

numbers.unshift(-2);
numbers.unshift(-4, -3);