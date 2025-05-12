const v1 = [];
function f2(a3) {
    const v4 = {};
    for (let i7 = 0; i7 < 1000000; i7++) {
    }
    const v14 = { writable: false };
    v14.set = Symbol;
    Object.defineProperty(v4, "length", v14);
}
const v17 = Symbol.species;
v1.constructor = { [v17]: f2 };
const v21 = Array.prototype.concat;
try { v21.call(v1); } catch (e) {}
