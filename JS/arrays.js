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

// Iterate with some

/**
 * Checks if some elements in the array pass a test.
 * @type {boolean}
 */
numbers.some(isEven);

// Iterate with forEach

/**
 * Executes a provided function once for each array element.
 */
numbers.forEach(x => console.log(x % 2 === 0));

/**
 * Represents an array of boolean values indicating whether each number in the array is even.
 * @type {boolean[]}
 */
const myMap = numbers.map(isEven);

console.log(myMap);

/**
 * Represents an array of even numbers.
 * @type {number[]}
 */
const evenNumbers = numbers.filter(isEven);

/**
 * Represents the sum of all numbers in the array.
 * @type {number}
 */
numbers.reduce((previous, current) => previous + current);

// ECMAScript2015 (ES6 || ES2016)(2015+) - new features for arrays

// ES2015 Introduce for..of

/**
 * Logs whether each number in the array is even or odd.
 */
for (const n of numbers) {
    console.log(n % 2 === 0 ? 'even' : 'odd');
}

// @@iterator

/**
 * Represents an iterator for the array.
 * @type {Iterator<number>}
 */
let iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

for (const n of iterator) {
    console.log(n);
}

// ES2015 also introduces 3 forms to get iterators from array
// entries, keys & values

/**
 * Represents an iterator for array entries.
 * @type {Iterator<[number, number]>}
 */
let aEntries = numbers.entries();
console.log(aEntries.next().value);
console.log(aEntries.next().value);
console.log(aEntries.next().value);

aEntries = numbers.entries();
for (const n of aEntries) {
    console.log(n);
}

// key

/**
 * Represents an iterator for array keys.
 * @type {Iterator<number>}
 */
const aKeys = numbers.keys();
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());

// values returns @@iterator

/**
 * Represents an iterator for array values.
 * @type {Iterator<number>}
 */
const aValues = numbers.values();
console.log(aValues.next());
console.log(aValues.next());
console.log(aValues.next());

// Using the from method

/**
 * Represents a copy of the array using the from method.
 * @type {number[]}
 */
let numbers2 = Array.from(numbers);

/**
 * Represents an array of even numbers using the from method.
 * @type {number[]}
 */
let evens = Arrays.from(numbers, x => (x % 2 == 0));

// Array.of

/**
 * Represents an array with a single element.
 * @type {number[]}
 */
let numbers3 = Arrays.of(1);

/**
 * Represents an array with multiple elements.
 * @type {number[]}
 */
let numbers4 = Arrays.of(1, 2, 3, 4, 5, 6);

/**
 * Represents a copy of the array using Array.of.
 * @type {number[]}
 */
let numbersCopy = Array.of(...numbers4);

// Method fill

/**
 * Represents an array filled with zeros.
 * @type {number[]}
 */
let numbersCopy1 = Arrays.of(1, 2, 3, 4, 5, 6);
numbersCopy1.fill(0);

/**
 * Represents an array with elements filled starting from index 1.
 * @type {number[]}
 */
numbersCopy1.fill(2, 1);

/**
 * Represents an array with elements filled between indexes 3 and 5.
 * @type {number[]}
 */
numbersCopy1.fill(1, 3, 5);

/**
 * Represents an array of ones.
 * @type {number[]}
 */
let ones = Array(6).fill(1);

// copyWithin

/**
 * Represents a copy of the array with elements copied within the array.
 * @type {number[]}
 */
let copyArray = [1, 2, 3, 4, 5, 6];
copyArray.copyWithin(0, 3);

// ordering elements

/**
 * Represents the reversed array.
 * @type {number[]}
 */
numbers.reverse();

/**
 * Represents the sorted array.
 * @type {number[]}
 */
numbers.sort();

/**
 * Represents the sorted array in ascending order.
 * @type {number[]}
 */
numbers.sort((a, b) => a - b);

// This function can be written like this

/**
 * Compares two numbers for sorting.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - A negative number if 'a' comes before 'b', a positive number if 'a' comes after 'b', and 0 if 'a' and 'b' are equal.
 */
function compare(a, b) {
    if (a < b) {
        return -1;
    }   
    if (a > b) {
        return 1;
    }

    return 0;
}

numbers.sort(compare);

// Custom ordering

const friends = [
    {name: 'John', age: 30},
    {name: 'Ana', age: 20},
    {name: 'Chris', age: 25}, // comma at the end: ES2017
];

function comparePerson(a, b) {
    if(a.age < b.age) {
        return -1;
    }
    if(a.age > b.age) {
        return 1;
    }
    return 0;
}

console.log(friends.sort(comparePerson));