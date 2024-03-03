import { swap } from '../../../util.js';

function shuffle(array) {
    for(let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        swap(array, i, randomIndex);
    }
    return array;
}

const array = [0,1,2,3,4,5,,6,7,8,9];

const result = shuffle(array, 3);

console.log(result);
