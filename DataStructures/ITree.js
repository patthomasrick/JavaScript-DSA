class ITree {
    constructor(element = null) {}

    add(element) {
        console.error("not implemented");
    }

    get(element) {
        console.error("not implemented");
    }

    getValue() {
        console.error("not implemented");
        return null;
    }

    getLeft() {
        console.error("not implemented");
        return null;
    }

    getRight() {
        console.error("not implemented");
        return null;
    }

    contains(element) {
        console.error("not implemented");
    }

    remove(element) {
        console.error("not implemented");
    }

    height() {
        console.error("not implemented");
    }

    bfs() {
        let output = [];
        let currentIndex = 0;
        let queue = [];
        queue.push(this);
        while (currentIndex < queue.length) {
            let current = queue[currentIndex];
            currentIndex++;
            output.push(current.getValue());
            if (current.getLeft() !== null) {
                queue.push(current.getLeft());
            }
            if (current.getRight() !== null) {
                queue.push(current.getRight());
            }
        }
        return output;
    }

    dfs() {
        let output = [];
        let stack = [];
        stack.push(this);
        while (stack.length > 0) {
            let current = stack.pop();
            output.push(current.getValue());
            if (current.getRight() !== null) {
                stack.push(current.getRight());
            }
            if (current.getLeft() !== null) {
                stack.push(current.getLeft());
            }
        }
        return output;
    }
}

module.exports = ITree;
