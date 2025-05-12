const v0 = /sQ5S/myuig;
function f1(a2, a3) {
    return a2;
}
function f4() {
    Object.defineProperty(v0, "c", { configurable: true, enumerable: true, get: f1, set: f4 });
    return f1;
}
f4();
f4();
