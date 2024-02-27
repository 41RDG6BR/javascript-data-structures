import { insertionSort } from './insertionSort.js';

export function bucketSort(array, bucketSize = 5) {
    if (array.length < 2) {
        return array;
    }

    console.log('Array Inicial:', array);

    const buckets = createBuckets(array, bucketSize);
    console.log('Baldes Iniciais:', buckets);

    const sortedArray = sortBuckets(buckets);
    console.log('Array Final Ordenado:', sortedArray);

    return sortedArray;
}

function createBuckets(array, bucketSize) {
    let minValue = array[0];
    let maxValue = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
        } else if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }

    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    const buckets = [];

    for (let i = 0; i < bucketCount; i++) {
        buckets[i] = [];
    }

    for (let i = 0; i < array.length; i++) {
        const bucketIndex = Math.floor((array[i] - minValue) / bucketSize);
        buckets[bucketIndex].push(array[i]);
    }

    console.log('Baldes Criados:', buckets);

    return buckets;
}

function sortBuckets(buckets) {
    const sortedArray = [];

    for (let i = 0; i < buckets.length; i++) {
        if (buckets[i] != null) {
            console.log(`Ordenando Balde ${i + 1}:`, buckets[i]);
            insertionSort(buckets[i]);
            console.log(`Balde ${i + 1} Ordenado:`, buckets[i]);
            sortedArray.push(...buckets[i]);
            console.log('Array Parcial Ordenado:', sortedArray);
        }
    }

    return sortedArray;
}

// Exemplo de uso:
const arrayDesordenado = [3, 5, 1, 6, 4, 7, 2];
bucketSort(arrayDesordenado);
