class HashTableSeparateChaining {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    put(key, value) {
        const position = this.hasCode(key);
        if(this.table[position] == null) {
            this.table[position] = new LinkedList();
        }
    }
}