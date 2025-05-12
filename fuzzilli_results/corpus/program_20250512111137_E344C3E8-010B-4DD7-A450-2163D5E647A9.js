function f0() {
}
class C1 extends f0 {
}
const v2 = new C1();
function f3(a4) {
    return -3.0;
}
v2[Symbol.toPrimitive] = f3;
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    a14.toString = Symbol;
    a14.__lookupSetter__(a14);
}
new F10(9, C1, C1);
new F10(8, 8, v2);
