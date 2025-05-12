function f3(a4) {
    const v6 = {
        get f() {
            this[5] ??= 3.0;
            return -2.0;
        },
    };
    return v6;
}
function f9(a10, a11) {
    const v19 = {
        [f3]: a10,
        set f(a13) {
            let v15 = 1391651736;
            --v15;
            !-5.0;
        },
    };
    v19[98];
    return v19;
}
const v21 = f9(3.0);
f9(-2.0);
f9(-1.5289782511775765e+308);
v21[98] = v21;
