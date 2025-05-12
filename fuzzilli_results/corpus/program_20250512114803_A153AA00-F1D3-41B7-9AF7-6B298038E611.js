function f0(a1, a2) {
    const v6 = {
        [a2](a4) {
            super[a2];
        },
    };
    return f0;
}
f0();
f0();
%OptimizeMaglevOnNextCall(f0);
f0();
