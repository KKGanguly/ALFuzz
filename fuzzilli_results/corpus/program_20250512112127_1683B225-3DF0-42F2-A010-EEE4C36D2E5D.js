function f1() {
    return Math.atan(8.172931771585385e+307);
}
f1();
%PrepareFunctionForOptimization(f1);
%OptimizeMaglevOnNextCall(f1);
f1();
