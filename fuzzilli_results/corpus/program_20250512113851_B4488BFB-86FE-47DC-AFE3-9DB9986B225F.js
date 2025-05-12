const v5 = [5];
function f6() {
    v5.length = 0;
    return 0;
}
const v8 = { valueOf: f6 };
function f10(a11, a12) {
    return a12 in a11;
}
f10(WeakMap, 5);
const v16 = new Proxy(Array, { has: f10 });
Object.setPrototypeOf(v5, v16);
Array.prototype.lastIndexOf.call(v5, undefined, v8);
