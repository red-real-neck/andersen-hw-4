class Stack {
    constructor(arrayLength = 10, a = undefined) {
        if (typeof arrayLength !== 'number') {
            throw new Error('Number expected');
        }
        this._arrayLength = arrayLength;
        if (a) {
            try {
                this.#stack = a.map(item => item);
            }
            catch {
                throw new Error(`${a} is not iterable`);
            }
        }
    }

    #stack = [];

    static fromIterable(iterable) {
        if (!(typeof iterable[Symbol.iterator] === 'function')) {
            throw new Error('object not iterable');
        }
        const result = [];

        for (let i = 0; i < iterable.length; i++) {
            result.push(iterable[i]);
        }

        return new Stack(result.length, result);
    }
    

    push(elem) {
        if (this.#stack.length === this._arrayLength) {
            throw new Error('Stack is full');
        }
        this.#stack.push(elem);
    }
    pop() {
        if (this.#stack.length === 0) {
            throw new Error('Stak is empty')
        }
        return this.#stack.pop();
    }
    peek() {
        if (this.#stack.length === 0) {
            return null;
        }
        return this.#stack[this.#stack.length - 1]
    }
    isEmpty() {
        if (this.#stack.length === 0) {
            return true;
        }
        return false
    }
    toArray() {
        if (this.#stack.length === 0) {
            throw new Error(`stack is empty`);
        }
        return this.#stack.map(item => item);
    }
}