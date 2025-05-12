function f2(a3, a4) {
    const v5 = a3 | 3115;
    v5 / v5;
    return a3;
}
f2();
f2(Float64Array);
%OptimizeMaglevOnNextCall(f2);
f2();
