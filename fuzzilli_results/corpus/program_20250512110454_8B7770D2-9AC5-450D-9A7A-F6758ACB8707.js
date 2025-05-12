const v0 = [];
function f1(a2) {
    const v3 = {};
    const t3 = v3.propertyIsEnumerable;
    t3();
    return v3;
}
const v7 = Symbol.species;
v0.constructor = { [v7]: f1 };
const v11 = Array.prototype.concat;
try { v11.call(v0); } catch (e) {}
