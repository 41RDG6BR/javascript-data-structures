import { defaultToString } from '../util.js';
import { ValuePair } from './value-pair.js';

class HashTable {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    loseloseHashCode(key) {
        if (typeof key === 'number') {
            return key;
        }
        const tableKey = this.toStrFn(key);
        let hash = 0;
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i)
        }
        return hash % 37;
    }
    hashCode(key) {
        return this.loseloseHashCode(key);
    }

    put(key, value) {
        if(key !== null && value != null){
            const position = this.hashCode(key);
            this.table[position] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    get(key) {
        const valuePair = this.table[this.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    remove(key) {
        const hash = this.hashCode(key);
        const valuePair = this.table[hash];
        if (valuePair != null) {
            delete this.table[hash];
            return true;
        }
        return false;
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }

        const keys = Object.keys(this.table);
        let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`

        for (let i = 1; i < keys.length; i++) {
            objString =  `${objString},\n{${keys[i]} => ${this.table[keys[i]].toString()}}`
        }

        return objString;
    }

    size() {
        return Object.keys(this.table).length;
    }

    isEmpty() {
        return this.size() === 0;
    }
}

const hash = new HashTable();

hash.put('Ygritte', 'ygritte@gmail.com');
hash.put('Jonathan', 'jonethan@gmail.com');
hash.put('Jamie', 'jamie@gmail.com');
hash.put('Jack', 'jack@gmail.com');
hash.put('Jasmine', 'jasmine@gmail.com');
hash.put('Jake', 'jake@gmail.com');
hash.put('Nathan', 'nathan@gmail.com');
hash.put('Athelstan', 'athelstan@gmail.com');
hash.put('Sue', 'sue@gmail.com');
hash.put('Aethelwulf', 'aethelwulf@gmail.com');
hash.put('Sargeras', 'sageras@gmail.com');

console.log(hash.toString())