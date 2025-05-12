function f0() {
}
const v1 = new f0();
var result_y;
function f5(a6) {
    result_y = a6;
    return f0;
}
function f8(a9) {
    f5(v1);
    %PrepareFunctionForOptimization(f5);
    %OptimizeMaglevOnNextCall(f5);
    f5(f0);
    return f8;
}
Object.__defineSetter__("z", f8);
Object.z = 27;
