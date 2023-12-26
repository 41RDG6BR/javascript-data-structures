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

// Remove element from specific position

numbers.splice(5, 3);

numbers.splice(5, 0, 2, 3, 4);

numbers.splice(5, 3, 2, 3, 4);

// Two-dimensional and multidimensional arrays

/**
 * Represents the average temperature for days.
 * @type {number[][]}
 */
let averageTemp = [
    [72, 75, 79, 79, 81, 81],
    [81, 79, 75, 75, 73, 72]
];

/**
 * Prints a matrix.
 * @param {number[][]} averageTemp - The matrix to be printed.
 */
function printMatrix(averageTemp) {
    for (let i = 0; i < averageTemp.length; i++) {
        for (let j = 0; j < averageTemp[i].length; j++) {
            console.log(averageTemp[i][j]);
        }
    }
}

/**
 * Represents a 3x3x3 matrix.
 * @type {number[][][]}
 */
const matrix3x3x3 = [];

for (let i = 0; i < 3; i++) {
    matrix3x3x3[i] = [];
    for (let j = 0; j < 3; j++) {
        matrix3x3x3[i][j] = [];
        for (let z = 0; z < 3; z++) {
            matrix3x3x3[i][j][z] = i + j + z;
        }
    }
}

console.log(matrix3x3x3);

for (let i = 0; i < matrix3x3x3.length; i++) {
    for (let j = 0; j < matrix3x3x3.length; j++) {
        for (let z = 0; z < matrix3x3x3.length; z++) {
            console.log(matrix3x3x3[i][j][z]);
        }
    }
}

// Reference to array methods

/**
 * Concatenates arrays.
 * @type {number[]}
 */
const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];
let numbersResult = negativeNumbers.concat(zero, positiveNumbers);

/**
 * Checks if a number is even.
 * @param {number} x - The number to check.
 * @returns {boolean} - True if the number is even, false otherwise.
 */
function isEven(x) {
    return x % 2 === 0;
}

// Iterate with every

/**
 * Checks if every element in the array passes a test.
 * @type {boolean}
 */
numbers.every(isEven);
