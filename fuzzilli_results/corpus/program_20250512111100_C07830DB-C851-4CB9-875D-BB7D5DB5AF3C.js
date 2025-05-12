class C1 {
    static #g = -297.22514982400685;
    static {
        try {
        const t0 = -297.22514982400685;
        t0(this, this);
        } catch (e) {}
        this.#g;
    }
}
function f5(a6) {
    const v8 = [,];
    v8["push"](C1, undefined);
    function f11(a12, a13, a14) {
        const t14 = v8.__proto__;
        t14[0] = 1;
        return f5;
    }
    v8.forEach(f11);
    return C1;
}
f5(f5);
f5();
