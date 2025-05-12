function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
const v4 = new F0();
function f5(a6) {
    const v11 = {
        b: v3,
        set d(a8) {
            Proxy(a6);
        },
        c: a6,
        g: v2,
        f: v4,
    };
    return v11;
}
const v12 = f5(v2);
f5();
%OptimizeFunctionOnNextCall(f5);
f5(v12);
