import { defaultToString } from '../util.js';
import { ValuePair }from './value-pair.js';

export default class Dictionary {
    constructor(toStrFn = defaultToString) {       
        this.toStrFn = toStrFn;
        this.table = {};
    }

    hasKey(key) {
        return this.table[this.toStrFn(key)] != null;
    }

    set(key, value) {
        if(key != null && value != null){
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    remove(key){
        if(this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }
    
    get(key){
        const ValuePair = this.table[this.toStrFn(key)];
        return ValuePair == null ? undefined : ValuePair.value;    
    }

    keyValues() {
        return Object.values(this.table);
    }

    keys() {
        return this.keyValues().map(valuePair => valuePair.key);
    }

    values() {
        return this.keyValues().map(valuePair => valuePair.value);
    }

    forEach(callbackFn) {
        const valuePairs = this.keyValues();
        for(let i = 1; i < valuePairs.length; i++){
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value)
            if(result === false) {
                break;
            }
        }
    };

    size() {
        return Object.keys(this.table).length;
    }

    isEmpyt() {
        return this.size() === 0;
    }

    clear() {
        this.table = {};
    }

    toString() {
        if(this.isEmpyt()) {
            return ''
        }

        const valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`;

        for(let i = 1; i < valuePairs.length; i++){
            objString = `${objString}, ${valuePairs[i].toString()}`;
        }
        return objString;
    }
}

const dictionary = new Dictionary();

dictionary.set('Rodrigo', 'rdg6design@gmail.com');
dictionary.set('Santos', 'rdg6santos@gmail.com');
dictionary.set('Nogeuria', 'rdg6design@gmail.com');
dictionary.set('RodrigoNogueira', 'rdg6design@gmail.com');
console.log(dictionary) 
console.log(dictionary.hasKey('Rodrigo'))
console.log(dictionary.get('Rodrigo'))
console.log(dictionary.remove('Rodrigo'))
console.log(dictionary.hasKey('Rodrigo'))
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('Santos'))
console.log(dictionary.size())
console.log(dictionary.keyValues())

dictionary.forEach((k, v) => {
    console.log('forEach: ', `key: ${k}, value: ${v}`)
})