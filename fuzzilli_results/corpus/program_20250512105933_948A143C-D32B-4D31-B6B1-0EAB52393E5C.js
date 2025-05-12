function f0() {
    var imul_func = Math.imul;
    function f4(a5, a6, a7) {
        function f8(a9, a10) {
            imul_func(a9);
        }
        f8(f8(f8, f4), a6);
        return f8(a6);
    }
    const v15 = f4(f0, f0, f0);
    f4();
    f4(f0, Math, f4());
    const v19 = f4();
    const v21 = f4(imul_func, v19, f4());
    f4();
    f4();
    f4();
    const v25 = f4(v21, f0, f0);
    f4(f0, v19, v21);
    f4(v15, v25, f0);
    f4();
    f4(0, "str");
    return v19;
}
f0.apply(f0, f0);
