class C0 {
}
const v3 = Math.atan2(C0, -256);
const v4 = [v3,v3,v3,v3,v3];
function f5(a6) {
    %PrepareFunctionForOptimization(Array);
    %OptimizeMaglevOnNextCall(Array);
    return a6;
}
const v9 = Symbol.species;
v4.constructor = { [v9]: f5 };
Array.prototype.concat.call(v4);
