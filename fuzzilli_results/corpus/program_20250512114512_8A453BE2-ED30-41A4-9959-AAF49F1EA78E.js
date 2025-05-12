const v0 = [];
function f1(a2) {
    const v3 = {};
    const v5 = {};
    function f6() {
        return f6;
    }
    Object.defineProperty(v5, "set", { configurable: true, get: f6 });
    return Object.defineProperty(v3, "length", v5);
}
const v10 = Symbol.species;
v0.constructor = { [v10]: f1 };
Array.prototype.concat.call(v0);
