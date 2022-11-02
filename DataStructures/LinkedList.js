const IList = require("./IList");

class Node {
    prev = null;
    next = null;
    value = null;
}

/**
 * Linked list implementation.
 *
 * @class LinkedList
 * @extends {IList}
 */
class LinkedList extends IList {
    #head = null;
    #tail = null;
    #length = 0;

    constructor() {
        super();
    }

    length() {
        return this.#length;
    }

    add(element) {
        // Create node and assign values.
        let node = new Node();
        node.value = element;
        node.prev = this.#tail;

        // Add node to list.
        if (this.#head === null || this.#tail === null) {
            this.#head = node;
            this.#tail = node;
        } else {
            this.#tail.next = node;
            this.#tail = node;
        }

        this.#length += 1;
    }

    extend(list) {
        if (list instanceof LinkedList) {
            // Linked list - just set pointers.
            if (this.#tail !== null && list.#head !== null) {
                this.#tail.next = list.#head;
                list.#head.prev = this.#tail;
                this.#tail = list.#tail;
            } else {
                this.#head = list.#head;
                this.#tail = list.#tail;
            }
            this.#length += list.length();
        } else if (list instanceof IList) {
            // Otherwise iterate over list.
            for (let i = 0; i < list.length(); i++) {
                this.add(list.at(i));
            }
        } else if (list instanceof Array) {
            // Array - iterate over array.
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
            this.#length += list.length;
        }
    }

    at(index) {
        let counter = 0;
        let current = this.#head;
        while (counter < index && current !== null) {
            counter += 1;
            current = current.next;
        }
        return current ? current.value : null;
    }

    remove(index) {
        let counter = 0;
        let current = this.#head;
        while (counter < index && current !== null) {
            counter += 1;
            current = current.next;
        }
        let prev = current.prev;
        let next = current.next;
        if (prev !== null) {
            prev.next = next;
        }
        if (next !== null) {
            next.prev = prev;
        }
        this.#length -= 1;
    }
}

module.exports = LinkedList;
