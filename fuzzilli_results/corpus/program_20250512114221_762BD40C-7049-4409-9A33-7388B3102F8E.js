function f0() {
    new Int32Array(Int32Array);
    return Int32Array;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
