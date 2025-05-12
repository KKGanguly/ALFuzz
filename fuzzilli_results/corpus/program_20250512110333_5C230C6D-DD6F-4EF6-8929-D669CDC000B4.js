function f0() {
    return f0;
}
function f1() {
    const v5 = {
        ...f0,
        ...f0,
        a: f0,
        set f(a3) {
            super.m();
        },
    };
    return f1;
}
f1();
f1();
%OptimizeMaglevOnNextCall(f1);
f1();
