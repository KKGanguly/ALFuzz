const v2 = [Date,Date,Date(Date)];
const v3 = [v2,v2];
class C4 extends Date {
    constructor(a6) {
        super(a6);
        Reflect.construct(Date, [v3]);
    }
}
new C4(v2);
function F11(a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
}
function f16(a17, a18) {
    a17 | 0;
    for (let i23 = 0, i24 = 10; i23 < i24; i23++) {
        typeof F11 === "number";
    }
    return v2;
}
function f34() {
    f16();
    f16();
    f16();
    f16();
}
f34();
f34();
