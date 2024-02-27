import { bucketSort } from './bucketSort.js';

function radixSort(array, radixBase = 10) {
    if (array.length <= 1) {
        return array;
    }

    const minValue = findMinValue(array);
    const maxValue = findMaxValue(array);
    let significantDigit = 1;

    while ((maxValue - minValue) / significantDigit >= 1) {
        console.log(`\nRadix Sort Iteração (Significant Digit: ${significantDigit}):`);
        console.log('Array antes do Counting Sort:', array);
        array = countingSortForRadix(array, radixBase, significantDigit, minValue);
        console.log('Array após Counting Sort:', array);
        significantDigit *= radixBase; // Correção aqui
    }

    return array;
}

function countingSortForRadix(array, radixBase, significantDigit, minValue) {
    let bucketsIndex;
    const buckets = Array.from({ length: radixBase }, () => 0);
    const aux = Array.from({ length: array.length }, () => 0); // Correção aqui

    for (let i = 0; i < array.length; i++) {
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase);
        buckets[bucketsIndex]++;
    }

    for (let i = 1; i < radixBase; i++) {
        buckets[i] += buckets[i - 1];
    }

    for (let i = array.length - 1; i >= 0; i--) {
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase);
        aux[--buckets[bucketsIndex]] = array[i];
    }

    for (let i = 0; i < array.length; i++) {
        array[i] = aux[i];
    }

    return array;
}

function findMinValue(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

function findMaxValue(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

// Exemplo de uso:
const arrayDesordenado = [3, 5, 1, 6, 4, 7, 2];
console.log('Array Desordenado:', arrayDesordenado);

console.log('\nIniciando Radix Sort:');
const arrayOrdenado = radixSort(arrayDesordenado);
console.log('\nArray Ordenado:', arrayOrdenado);
