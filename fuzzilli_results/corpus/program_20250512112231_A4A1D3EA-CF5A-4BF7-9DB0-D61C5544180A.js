const v0 = /ea\nb\bc/myuidg;
const v1 = /Ka|b+/myuidg;
function f2(a3) {
    const v7 = {
        a: a3,
        __proto__: v1,
        251: a3,
        1: v1,
        9: a3,
        h: v0,
        valueOf(a5, a6) {
            super.g = a3;
            return a5;
        },
    };
    v7[9] = v7;
    return v7;
}
f2(v1);
const v9 = f2(v0);
%OptimizeFunctionOnNextCall(f2);
const v11 = f2().constructor;
try { v11(v9, v9); } catch (e) {}
