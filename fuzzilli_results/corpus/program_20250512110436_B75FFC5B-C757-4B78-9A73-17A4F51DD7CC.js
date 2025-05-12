function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4) {
    return a3;
}
const v6 = new F0();
Object.defineProperty(v6, Symbol.toStringTag, { writable: true, value: f2 });
const v8 = new F0();
v8[Symbol.toStringTag] = Symbol;
