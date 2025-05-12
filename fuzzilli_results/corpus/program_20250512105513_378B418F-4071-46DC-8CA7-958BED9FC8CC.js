function f0() {
}
const v1 = f0();
-258886.8444771017 >> -258886.8444771017;
try { v1(); } catch (e) {}
[v1];
function f7() {
    return f7;
}
function f8() {
}
const v9 = f7.prototype;
v9.f = f8;
v9.f = f8;
f8();
%PrepareFunctionForOptimization(f8);
%OptimizeMaglevOnNextCall(f8);
f8();
