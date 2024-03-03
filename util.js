export function defaultToString(item) {
    if(item === null){
        return 'NULL'
    } else if(item === undefined){
        return 'UNDEFINED'
    } else if(typeof item === 'string' || item instanceof String) {
        return `${item}`
    }
    return item.toString();
}

export function defaultEquals(item1, item2) {
    return defaultToString(item1) === defaultToString(item2);
}

export const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
};

export function defaultCompare(a, b) {
    if(a === b) {
        return 0;
    }

    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export function lesserOrEquals(a, b, compareFn) {
    const comp = compareFn(a, b);
    return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}

export function biggerOrEquals(a, b, compareFn) {
    const comp = compareFn(a, b);
    return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS;
}

export function defaultDiff(a, b) {
    return Number(a) - Number(b);   
}

export function swap(array, a, b) {
    /* const temp = array[a];
    array[a] = array[b];
    array[b] = temp; */
    [array[a], array[b]] = [array[b], array[a]];
}
export function reverseCompare(compareFn) {
    return (a, b) => compareFn(b, a);
}