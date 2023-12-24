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