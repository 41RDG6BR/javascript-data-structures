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

// Removing elements
// Remove element from the end of the array

numbers.pop();

// Removing element from the first position

/**
 * Remove the first position from the array.
 */
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] = numbers[i + 1]);
}

/**
 * Represents an array of numbers.
 * @type {number[]}
 */

// Remove element from the first position of the array
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i + 1];
}

/**
 * Removes undefined elements from an array.
 * @param {Array} myArray - The input array.
 * @returns {Array} - A new array with undefined elements removed.
 */
Array.prototype.reIndex = function (myArray) {
    const newArray = [];
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] !== undefined) {
            console.log(myArray[i]);
            newArray.push(myArray[i]);
        }
    }
    console.log(newArray);
    return newArray;
};

/**
 * Removes the first position from the array and reindexes.
 * @returns {Array} - A new array with the first position removed.
 */

// remove first position manually - not used
Array.prototype.removeFirstPosition = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
    }

    return this.reIndex(this);
}

numbers = numbers.removeFirstPosition();

// Remove first position with method shift

numbers.shift();
