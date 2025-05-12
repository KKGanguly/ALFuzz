const v0 = [];
function f1(a2) {
    const v3 = {};
    const v7 = {
        set c(a6) {
        },
    };
    Object.defineProperty(v3, "length", v7);
}
const v11 = Symbol.species;
v0.constructor = { [v11]: f1 };
Array.prototype.concat.call(v0);
