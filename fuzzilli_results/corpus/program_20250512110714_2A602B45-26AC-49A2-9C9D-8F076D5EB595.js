function f0() {
    const v10 = {
        1024: -1911811255,
        set a(a5) {
            with ("object") {
                Object = a5;
            }
        },
        [65535]: 65535,
        7: -1911811255,
        64: "object",
    };
}
f0();
f0();
%OptimizeMaglevOnNextCall(f0);
f0();
