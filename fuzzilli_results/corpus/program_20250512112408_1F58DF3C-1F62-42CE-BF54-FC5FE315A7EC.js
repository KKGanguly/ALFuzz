const v3 = [5];
function f4() {
    v3.length = 0;
    return 0;
}
const v6 = { valueOf: f4 };
const v9 = new Proxy(Array, {});
Object.setPrototypeOf(v3, v9);
Array.prototype.lastIndexOf.call(v3, undefined, v6);
