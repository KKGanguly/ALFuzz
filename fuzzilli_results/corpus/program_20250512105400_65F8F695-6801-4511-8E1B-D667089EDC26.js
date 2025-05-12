const v0 = [];
function f1(a2) {
    const v3 = {};
    for (let i6 = 0; i6 < 1000000; i6++) {
    }
    Object.defineProperty(v3, "length", {});
}
const v16 = Symbol.species;
v0.constructor = { [v16]: f1 };
Array.prototype.concat.call(v0);
