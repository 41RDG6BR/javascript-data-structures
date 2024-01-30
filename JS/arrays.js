class CustomArray extends Array {
    /**
     * Inserts a value at the beginning of the array.
     * @param {any} value - The value to be inserted.
     */
    insertFirstPosition(value) {
        for (let i = this.length; i > 0; i--) {
            this[i] = this[i - 1];
        }
        this[0] = value;
    }

    /**
     * Removes undefined elements from an array.
     * @returns {CustomArray} - A new array with undefined elements removed.
     */
    reIndex() {
        return new CustomArray(...this.filter(element => element !== undefined));
    }

    /**
     * Removes the first position from the array and reindexes.
     * @returns {CustomArray} - A new array with the first position removed.
     */
    removeFirstPosition() {
        return new CustomArray(...this.slice(1));
    }
}

const numbers = new CustomArray(0, 1, 2, 3, 4, 5);
console.log(numbers);

// Adding elements to the end of the array with push
numbers.push(11, 12, 13);

// Inserting elements at the first position of the array
numbers.unshift(-4, -3, -2);

// Removing elements
// Remove element from the end of the array
numbers.pop();

// Remove element from the first position of the array
numbers.shift();

// Remove elements from a specific position
numbers.splice(5, 3, 2, 3, 4);

// Two-dimensional and multidimensional arrays
const averageTemp = [
    [72, 75, 79, 79, 81, 81],
    [81, 79, 75, 75, 73, 72]
];

function printMatrix(matrix) {
    matrix.forEach(row => {
        row.forEach(element => console.log(element));
    });
}

printMatrix(averageTemp);

const matrix3x3x3 = new CustomArray();
for (let i = 0; i < 3; i++) {
    matrix3x3x3[i] = new CustomArray();
    for (let j = 0; j < 3; j++) {
        matrix3x3x3[i][j] = new CustomArray();
        for (let z = 0; z < 3; z++) {
            matrix3x3x3[i][j][z] = i + j + z;
        }
    }
}

console.log(matrix3x3x3);

// Reference to array methods
const zero = 0;
const positiveNumbers = new CustomArray(1, 2, 3);
const negativeNumbers = new CustomArray(-3, -2, -1);
let numbersResult = negativeNumbers.concat(zero, positiveNumbers);

function isEven(x) {
    return x % 2 === 0;
}

// Iterating with every
console.log(numbersResult.every(isEven));

// Iterating with some
console.log(numbersResult.some(isEven));

// Iterating with forEach
numbersResult.forEach(x => console.log(x % 2 === 0));

const myMap = numbersResult.map(isEven);
console.log(myMap);

const evenNumbers = numbersResult.filter(isEven);
console.log(evenNumbers);

const sum = numbersResult.reduce((previous, current) => previous + current);
console.log(sum);

// ECMAScript2015 (ES6 || ES2016)(2015+) - new features for arrays
// ES2015 Introduce for..of
for (const n of numbersResult) {
    console.log(n % 2 === 0 ? 'even' : 'odd');
}

// @@iterator
let iterator = numbersResult[Symbol.iterator]();
for (const n of iterator) {
    console.log(n);
}

// ES2015 also introduces 3 forms to get iterators from array entries, keys & values
let aEntries = numbersResult.entries();
for (const n of aEntries) {
    console.log(n);
}

const aKeys = numbersResult.keys();
for (const key of aKeys) {
    console.log(key);
}

const aValues = numbersResult.values();
for (const value of aValues) {
    console.log(value);
}

// Using the from method
let numbers2 = CustomArray.from(numbersResult);
let evens = CustomArray.from(numbersResult, x => x % 2 === 0);

// Array.of
let numbers3 = CustomArray.of(1);
let numbers4 = CustomArray.of(1, 2, 3, 4, 5, 6);
let numbersCopy = CustomArray.of(...numbers4);

// Method fill
let numbersCopy1 = CustomArray.of(1, 2, 3, 4, 5, 6);
numbersCopy1.fill(0);
numbersCopy1.fill(2, 1);
numbersCopy1.fill(1, 3, 5);
let ones = CustomArray(6).fill(1);

// copyWithin
let copyArray = CustomArray(1, 2, 3, 4, 5, 6);
copyArray.copyWithin(0, 3);

// ordering elements
numbersResult.reverse();
numbersResult.sort((a, b) => a - b);

// Custom ordering
const friends = [
    { name: 'John', age: 30 },
    { name: 'Ana', age: 20 },
    { name: 'Chris', age: 25 },
];

function comparePerson(a, b) {
    return a.age - b.age;
}

console.log(friends.sort(comparePerson));

// Ordering strings
let names = ['Ana', 'ana', 'john', 'John'];
console.log(names.sort((a, b) => a.localeCompare(b)));

// Search
console.log(numbersResult.indexOf(10));
console.log(numbersResult.lastIndexOf(10));

// ECMAScript2015 - The methods find and findIndex
console.log(numbersResult.find(multipleOf13));
console.log(numbersResult.findIndex(multipleOf13));

// ECMAScript2016 - method includes
console.log(numbersResult.includes(15));
console.log(numbersResult.includes(20));

let anotherNumbers = CustomArray(7, 6, 5, 4, 3, 2, 1);  // Rename to anotherNumbers
console.log(anotherNumbers.includes(4, 5));

// Converting array to a string
console.log(numbersResult.toString());

// Join
const numbersString = numbersResult.join('-');
console.log(numbersString);
