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
