function f0(a1, a2) {
    const v5 = ["invalid",23];
    for (let i12 = (() => {
            function f7(a8, a9, a10, a11) {
                return a9;
            }
            return 0;
        })();
        i12 < v5.length;
        i12++) {
        try {
            Error.call(v5[i12]);
        } catch(e21) {
        }
    }
    return f0;
}
function f22() {
    const v23 = f0();
    const v24 = f0(v23, v23);
    f0();
    f0(f0, f22);
    f0(v23, v24);
    f0();
    f0();
    return f0;
}
f22();
f22();
