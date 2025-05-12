let v1;
try {
const t0 = 7;
v1 = t0(7, 7, 7);
} catch (e) {}
function f2(a3, a4, a5, a6) {
    const v7 = { ...v1 };
    return f2;
}
const v8 = f2(f2, v1, v1, v1);
const v9 = f2(v1, v8, 7, v8);
%OptimizeFunctionOnNextCall(f2);
f2(v8, v1, v1, v9);
