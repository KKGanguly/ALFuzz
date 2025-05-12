function f1() {
    return f1;
}
Uint32Array.constructor = f1;
function f4() {
    selfOf(this);
    return f4;
}
function selfOf(a8) {
    a8[Symbol.toPrimitive] = selfOf;
    a8 - 64;
}
f4.apply(selfOf, f4, selfOf, selfOf, f1);
f4.apply();
