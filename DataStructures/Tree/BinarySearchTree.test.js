const BinarySearchTree = require("./BinarySearchTree");
const ITree = require("../ITree");

test("Construct", () => {
    let tree = new BinarySearchTree();
    tree.add(1);
    expect(tree).toBeInstanceOf(ITree);
    expect(tree.contains(1)).toBe(true);
});

test("Construct 2", () => {
    let tree = new BinarySearchTree(1);
    expect(tree).toBeInstanceOf(ITree);
    expect(tree.contains(1)).toBe(true);
});

test("Add/Contains", () => {
    let tree = new BinarySearchTree();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    expect(tree.contains(5)).toBe(true);
    expect(tree.contains(10)).toBe(true);
    expect(tree.contains(15)).toBe(true);
    expect(tree.contains(1)).toBe(false);

    tree.add(5);
    expect(tree.contains(5)).toBe(true);
});

test("Height", () => {
    let tree = new BinarySearchTree();
    expect(tree.height()).toBe(0);
    tree.add(10);
    expect(tree.height()).toBe(1);
    tree.add(5);
    expect(tree.height()).toBe(2);
    tree.add(15);
    expect(tree.height()).toBe(2);
    tree.add(20);
    expect(tree.height()).toBe(3);
});

test("BFS", () => {
    let tree = new BinarySearchTree();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    expect(tree.bfs()).toStrictEqual([10, 5, 15]);
});

test("DFS", () => {
    let tree = new BinarySearchTree();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    expect(tree.dfs()).toStrictEqual([10, 5, 15]);
});
