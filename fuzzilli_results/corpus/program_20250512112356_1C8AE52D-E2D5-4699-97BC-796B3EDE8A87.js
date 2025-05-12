const v2 = [Symbol];
const v3 = [-65537n];
function f4() {
    return -65537n;
}
Object.defineProperty(v3, "toString", { configurable: true, enumerable: true, value: f4 });
function f6(a7, a8, a9) {
    a8.toString = f6;
    return a9;
}
const t10 = Number.prototype;
t10.__proto__ = f6;
(0).prototype.constructor(0, v2);
