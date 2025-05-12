const v0 = [];
function f1(a2) {
    const v4 = { length: 0 };
    const v6 = {};
    v6.writable = v6;
    Object.defineProperty(v4, "length", v6);
    return v6;
}
const v10 = Symbol.species;
v0.constructor = { [v10]: f1 };
Array.prototype.concat.call(v0);
