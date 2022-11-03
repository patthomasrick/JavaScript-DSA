/**
 * Interface for all lists.
 */
class IList {
    /**
     * Construct a new list.
     */
    constructor() {}

    /**
     * Get the length of the list.
     *
     * @returns {number}
     */
    length() {
        console.error("Not implemented.");
    }

    /**
     * Add a new element to the list.
     *
     * @param {*} element
     */
    add(element) {
        console.error("Not implemented.");
    }

    /**
     * Extend the list with another list.
     *
     * @param {IList} list
     */
    extend(list) {
        console.error("Not implemented.");
    }

    /**
     * Get the element at the given index.
     *
     * @param {number} index
     * @returns {*}
     */
    at(index) {
        console.error("Not implemented.");
    }

    /**
     * Remove the element at the given index.
     *
     * @param {number} index
     */
    remove(index) {
        console.error("Not implemented.");
    }
}

module.exports = IList;
