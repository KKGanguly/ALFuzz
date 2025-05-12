class C1 extends Map {
    constructor(a3, a4) {
        super(a3);
        const v5 = { __proto__: a4, a: a3 };
    }
}
const v6 = { [C1]: Map };
function f7(a8, a9) {
}
function f10() {
    class C12 extends Map {
        static 65535 = f7;
        [536870912] = f7;
        static [536870912];
    }
}
f10();
f10();
