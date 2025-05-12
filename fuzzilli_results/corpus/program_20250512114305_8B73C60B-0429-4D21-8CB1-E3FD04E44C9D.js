const v4 = Array.prototype;
const v7 = [5,,];
function f8() {
    return ("HasProperty").split(7, v4);
}
const v12 = new Proxy(Array, { has: f8 });
Object.setPrototypeOf(v7, v12);
const v14 = Array.prototype;
v14[6362] = undefined;
v14.lastIndexOf.call(v7);
