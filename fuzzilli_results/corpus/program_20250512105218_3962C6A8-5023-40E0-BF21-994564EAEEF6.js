const v7 = new WeakMap();
let v12 = undefined;
const v15 = [5,,];
const v16 = [];
function f17() {
    return true;
}
function f20() {
    v16.push("Get");
}
const v24 = new Proxy(Array, { has: f17, get: f20 });
Object.setPrototypeOf(v15, v24);
Array.prototype.lastIndexOf.call(v15);
v12 = v24;
v7.delete("callee");
class C32 extends WeakSet {
    static #f = 23758;
    static ["40389"];
    static [23758] = "callee";
}
function f36(a37) {
    a37 ?? a37;
    try { arguments.callee(C32); } catch (e) {}
    const v41 = arguments[0];
    v41 ?? v41;
    return arguments;
}
const v44 = f36().callee;
try { new v44(); } catch (e) {}
