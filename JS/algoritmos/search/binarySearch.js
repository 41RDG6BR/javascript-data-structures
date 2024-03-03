import { Compare, defaultCompare } from "../../../util.js";
import { quickSort } from '../quickSort.js';

const DOES_NOT_EXIST = -1;

function binarySearch(array, value, compareFn = defaultCompare) {
    const sortedArray = quickSort(array);
    let low = 0;
    let high = sortedArray.length - 1;

    while (lesserOrEquals(low, high, compareFn)) {
        const mid = Math.floor((low + high) / 2);
        const element = sortedArray[mid];

        console.log(`Checking element at index ${mid}: ${element}`);

        if (compareFn(element, value) === Compare.LESS_THAN) {
            low = mid + 1;
        } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
            high = mid - 1;
        } else {
            console.log(`Found ${value} at index ${mid}`);
            return mid;
        }
    }

    console.log(`${value} not found in the array`);
    return DOES_NOT_EXIST;
}

function lesserOrEquals(a, b, compareFn) {
    const comp = compareFn(a, b);
    return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}

const searchArray = [5, 4, 3, 2, 1];

const result = binarySearch(searchArray, 3);

console.log(result);
