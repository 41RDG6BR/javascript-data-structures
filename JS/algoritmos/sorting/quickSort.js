import { Compare, defaultCompare } from '../../../util.js';

export function quickSort(array, compareFn = defaultCompare) {
    return quick(array, 0, array.length - 1, compareFn);
}

function quick(array, left, right, compareFn) {
    console.log('Chamada da função quick:', { left, right });
    let index;

    if (array.length > 1) {
        index = partition(array, left, right, compareFn);

        if (left < index - 1) {
            console.log('Recursão para a esquerda');
            quick(array, left, index - 1, compareFn);
        }

        if (index < right) {
            console.log('Recursão para a direita');
            quick(array, index, right, compareFn);
        }
    }
    return array;
}

function partition(array, left, right, compareFn) {
    console.log('Chamada da função partition:', { left, right });
    const pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
            i++;
        }
        while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
            j--;
        }
        if (i <= j) {
            console.log('Troca de elementos:', { i, j });
            [array[i], array[j]] = [array[j], array[i]]; // Troca de elementos
            i++;
            j--;
        }
    }
    console.log('Índice do pivô após a partição:', i);
    return i;
}

// Exemplo de uso:
const arrayDesordenado = [3, 5, 1, 6, 4, 7, 2];
console.log('Array Original:', arrayDesordenado);

const arrayOrdenado = quickSort(arrayDesordenado);
console.log('Array Final Ordenado:', arrayOrdenado);
