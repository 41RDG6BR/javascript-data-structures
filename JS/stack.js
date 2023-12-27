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

    // Pop method removes and returns the last element from the stack
    pop() {
        // Check if the stack is empty
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        console.log(result);
        return result;
    }

    // Peek method returns the last element without removing it
    peek() {
        return this.items[this.items.length - 1];
    }

    // isEmpty method checks if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // size method returns the number of elements in the stack
    size() {
        return this.items.length;
    }
