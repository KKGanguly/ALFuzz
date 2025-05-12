function f1(a2) {
    return f1;
}
Object.prototype.__defineSetter__("x", f1);
function f8() {
    return f1;
}
Object.defineProperty(Array, 9998, { get: f8 });
