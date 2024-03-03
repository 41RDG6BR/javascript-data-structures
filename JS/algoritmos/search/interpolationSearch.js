import { 
    biggerOrEquals,
    lesserOrEquals,
    defaultCompare,
    defaultEquals,
    defaultDiff
} from '../../../util.js';

const DOES_NOT_EXIST = -1;

function interpolationSearch(array, value,
    compareFn = defaultCompare,
    equalsFn = defaultEquals,
    diffFn = defaultDiff
) {
    const { length } = array;
    let low = 0;
    let high = length - 1;
    let position = -1;
    let delta = -1;

    while (
        low <= high &&
        lesserOrEquals(value, array[high], compareFn) &&
        biggerOrEquals(value, array[low], compareFn)
    ) {
        delta = diffFn(value, array[low]) / diffFn(array[high], array[low]);
        position = low + Math.floor((high - low) * delta);

        console.log(`Checking position ${position}, value ${array[position]}`);

        if (equalsFn(array[position], value) === compareFn.LESS_THAN) {
            low = position + 1;
        } else {
            high = position - 1;
        }
    }

    if (position !== -1) {
        console.log(`Value ${value} found at position ${position}`);
        return position;
    } else {
        console.log(`Value ${value} not found in the array`);
        return DOES_NOT_EXIST;
    }
}

const searchArray = [1, 2, 3, 4, 5];
const valueToSearch = 2;

const result = interpolationSearch(searchArray, valueToSearch, defaultCompare, defaultEquals, defaultDiff);
console.log(result);
