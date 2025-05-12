const v1 = (2.2250738585072014e-308).reduceRight;
try { v1(2.2250738585072014e-308, v1, 2.2250738585072014e-308, v1); } catch (e) {}
function f3() {
    return f3;
}
f3();
%PrepareFunctionForOptimization(f3);
%OptimizeMaglevOnNextCall(f3);
f3();
