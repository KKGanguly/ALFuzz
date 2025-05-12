const v1 = [0,0];
function f2(a3) {
    const v5 = { length: 0 };
    const v7 = {};
    v7.enumerable = 0;
    Object.defineProperty(v5, "length", v7);
    return v1;
}
const v11 = Symbol.species;
v1.constructor = { [v11]: f2 };
Array.prototype.concat.call(v1);
