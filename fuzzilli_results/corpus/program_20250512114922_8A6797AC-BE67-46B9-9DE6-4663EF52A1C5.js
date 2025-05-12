const v0 = [];
function f1(a2) {
    const v4 = { length: 0 };
    Object.defineProperty(v4, "length", { __proto__: v4, writable: false });
}
const v11 = Symbol.species;
v0.constructor = { [v11]: f1 };
Array.prototype.concat.call(v0);
