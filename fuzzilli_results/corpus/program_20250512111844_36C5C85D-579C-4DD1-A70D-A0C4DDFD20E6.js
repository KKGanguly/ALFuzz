const v1 = [-9007199254740990,-9007199254740990,-9007199254740990];
function f2() {
    return -9007199254740990;
}
function f3(a4) {
    return -9007199254740990;
}
Object.defineProperty(v1, Symbol.isConcatSpreadable, { configurable: true, get: f2, set: f3 });
Array.prototype.concat.call(v1);
