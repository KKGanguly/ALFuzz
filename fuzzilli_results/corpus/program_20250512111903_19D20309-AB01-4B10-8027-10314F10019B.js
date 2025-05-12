function f0(a1) {
    const v3 = [,,];
    v3[1] = 0;
    v3[2] = 2;
    function f6(a7, a8, a9) {
        return f6;
    }
    return v3.forEach(f6);
}
f0(f0);
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
