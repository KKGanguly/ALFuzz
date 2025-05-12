function f2() {
    return f2;
}
const v4 = new Proxy(Array, { get: f2 });
Array.prototype.lastIndexOf.call(v4);
