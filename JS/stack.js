// Class definition for a Stack
class Stack {
    // Constructor initializes an empty array and sets the count to 0
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // Push method adds an element to the stack
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }
