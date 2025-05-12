const v0 = [];
function f1(a2) {
    Object.seal({});
    return a2;
}
f1(f1);
const v8 = Symbol.species;
v0.constructor = { [v8]: f1 };
Array.prototype.concat.call(v0);
