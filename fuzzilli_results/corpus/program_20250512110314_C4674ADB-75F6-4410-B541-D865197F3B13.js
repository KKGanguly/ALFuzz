const v1 = [Int16Array];
function f2() {
    return Int16Array;
}
function f3(a4) {
    return v1;
}
Object.defineProperty(v1, Symbol.isConcatSpreadable, { enumerable: true, get: f2, set: f3 });
Array.prototype.concat.call(v1);
