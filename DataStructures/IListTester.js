const IList = require("./IList");

function testImpl(ListImpl) {
    test("Construct", () => {
        let list = new ListImpl();
        expect(list).toBeInstanceOf(IList);
        expect(list.length()).toBe(0);
    });

    test("Add", () => {
        let list = new ListImpl();

        list.add(1);
        expect(list.length()).toBe(1);
        expect(list.at(0)).toBe(1);

        list.add("hello");
        expect(list.length()).toBe(2);
        expect(list.at(0)).toBe(1);
        expect(list.at(1)).toBe("hello");

        list.add(3);
        expect(list.length()).toBe(3);
        expect(list.at(0)).toBe(1);
        expect(list.at(1)).toBe("hello");
        expect(list.at(2)).toBe(3);
    });

    test("Extend", () => {
        let list1 = new ListImpl();
        list1.add(1);
        list1.add(2);

        let list2 = new ListImpl();
        list2.add("hello");
        list2.add("world");

        let list3 = new ListImpl();
        list3.extend(list1);
        expect(list3.length()).toBe(2);
        expect(list3.at(0)).toBe(1);
        expect(list3.at(1)).toBe(2);

        list3.extend(list2);
        expect(list3.length()).toBe(4);
        expect(list3.at(0)).toBe(1);
        expect(list3.at(1)).toBe(2);
        expect(list3.at(2)).toBe("hello");
        expect(list3.at(3)).toBe("world");
    });
}

// Skip test.

module.exports = testImpl;
