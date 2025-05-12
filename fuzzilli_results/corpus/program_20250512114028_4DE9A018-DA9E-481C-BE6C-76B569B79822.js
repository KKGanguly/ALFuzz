const v3 = new Proxy(Array, {});
const v7 = [5,,];
function f8() {
    return "HasProperty";
}
const v11 = new Proxy(Array, { has: f8, get: v3 });
Object.setPrototypeOf(v7, v11);
Array.prototype.lastIndexOf.call(v7);
