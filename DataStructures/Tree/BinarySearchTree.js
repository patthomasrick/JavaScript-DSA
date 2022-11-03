const ITree = require("../ITree");

class BinarySearchTree extends ITree {
    #value = null;
    #left = null;
    #right = null;

    constructor(element = null) {
        super();
        this.#value = element;
    }

    add(element) {
        if (this.#value === null) {
            this.#value = element;
        } else if (this.#value === element) {
            // Do nothing.
        } else if (element < this.#value && this.#left === null) {
            this.#left = new BinarySearchTree(element);
        } else if (element < this.#value) {
            this.#left.add(element);
        } else if (this.#right === null) {
            this.#right = new BinarySearchTree(element);
        } else {
            this.#right.add(element);
        }
    }

    get(element) {
        if (this.#value === null) {
            return null;
        } else if (this.#value === element) {
            return this.#value;
        } else if (element < this.#value && this.#left === null) {
            return null;
        } else if (element < this.#value) {
            return this.#left.get(element);
        } else if (this.#right === null) {
            return null;
        } else {
            return this.#right.get(element);
        }
    }

    getValue() {
        return this.#value;
    }

    getLeft() {
        return this.#left;
    }

    getRight() {
        return this.#right;
    }

    contains(element) {
        return this.get(element) === element;
    }

    remove(element) {
        // TODO
    }

    #is_leaf() {
        return this.#left === null && this.#right === null;
    }

    #is_full() {
        return this.#left !== null && this.#right !== null;
    }

    height() {
        if (this.#value === null) {
            return 0;
        }
        let left_height = this.#left ? this.#left.height() : 0;
        let right_height = this.#right ? this.#right.height() : 0;
        return 1 + Math.max(left_height, right_height);
    }
}

module.exports = BinarySearchTree;
