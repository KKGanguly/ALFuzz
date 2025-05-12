const v0 = [];
function f1(a2) {
    const v3 = {};
    Object.defineProperty(v3, "length", { writable: a2 });
    return v0;
}
const v9 = Symbol.species;
v0.constructor = { [v9]: f1 };
Array.prototype.concat.call(v0);
