function f0() {
    const v6 = {
        e: -2.220446049250313e-16,
        m(a3) {
            return -2.220446049250313e-16;
        },
        b: -2.220446049250313e-16,
        toString(a5) {
            return this;
        },
    };
    function f7() {
        return f0;
    }
    Object.defineProperty(v6, "d", { configurable: true, enumerable: true, get: f7 });
    return v6;
}
f0();
const v9 = f0();
const v10 = { ...v9 };
