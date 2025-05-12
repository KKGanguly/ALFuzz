const v4 = [5];
function f5() {
    v4.length = 0;
    return undefined;
}
const v7 = { valueOf: f5 };
function f9(a10, a11) {
    50 in a10;
    return v7;
}
const v14 = new Proxy(Array, { has: f9 });
const v16 = Object.setPrototypeOf(v4, v14);
Array.prototype.lastIndexOf.call(v4, undefined, v7);
const v20 = v16.__proto__;
Object.defineProperty(v20, 9998, {});
