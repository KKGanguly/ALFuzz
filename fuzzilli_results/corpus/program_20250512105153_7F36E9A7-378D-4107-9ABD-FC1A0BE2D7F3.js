const v2 = [0,1];
function f3(a4) {
    const v6 = { length: 0 };
    Object.defineProperty(v6, "length", { writable: false });
    return v6;
}
const v13 = Symbol.species;
v2.constructor = { [v13]: f3 };
const v18 = Array.prototype.concat;
try { v18.call(v2); } catch (e) {}
