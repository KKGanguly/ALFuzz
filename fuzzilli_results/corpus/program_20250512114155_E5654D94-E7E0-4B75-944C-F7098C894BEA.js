function f2() {
    return f2;
}
Object.defineProperty(selfOf, 0, { configurable: true, enumerable: true, get: f2 });
function selfOf(a4) {
    return 12;
}
Object.defineProperty(selfOf, 0, { writable: true, enumerable: true, value: 12 });
