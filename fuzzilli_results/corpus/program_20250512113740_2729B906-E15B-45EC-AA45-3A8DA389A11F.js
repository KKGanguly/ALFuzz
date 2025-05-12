function f0() {
    const v4 = {
        h: 6,
        a: 239830.45473128138,
        get c() {
            return this;
        },
    };
    return v4;
}
f0();
f0();
%OptimizeMaglevOnNextCall(f0);
f0();
