function f0() {
    const v5 = {
        get d() {
            super.f = 2147483648;
            %VerifyType(-1000000000000.0);
            return 2147483648;
        },
        ...2147483648,
        ...-1000000000000.0,
        [-287442689]: 2147483648,
        c: -1000000000000.0,
        ...2147483648,
        e: 2147483648,
        h: -287442689,
        __proto__: -287442689,
    };
    return v5;
}
f0(f0());
f0();
new Uint8Array(484544819);
new Int32Array(92);
new Uint8ClampedArray(2);
function f22(a23, a24) {
    function f25() {
        const v27 = a24(this, this);
        return { fffffff: v27 };
    }
    return f25;
}
const v31 = f22(m, selfOf);
function selfOf(a33) {
    return a33.self_;
}
function m() {
    return m;
}
v31.apply({ self_: 3 });
const v41 = { self_: 3 };
v31.apply(3, selfOf);
