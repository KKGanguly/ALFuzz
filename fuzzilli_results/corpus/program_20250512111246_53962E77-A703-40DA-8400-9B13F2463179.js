const v1 = Array.prototype;
const v6 = [5,,];
function f7() {
    return true;
}
function f9() {
    return v1.push(v1);
}
const v12 = new Proxy(Array, { has: f7, get: f9 });
Object.setPrototypeOf(v6, v12);
Array.prototype.lastIndexOf.call(v6);
