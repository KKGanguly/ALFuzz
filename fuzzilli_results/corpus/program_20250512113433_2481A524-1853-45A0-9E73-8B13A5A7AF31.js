function f1() {
    return selfOf();
}
function selfOf(a4) {
    const v6 = Math.imul;
    function f7(a8, a9, a10) {
        function f11(a12, a13) {
            a12 >> a12;
            Math >>> a13;
            v6();
            return a13;
        }
        f11();
        f11();
        f11();
        f11(a9);
        return v6;
    }
    f7(v6, Math, v6);
    const v22 = f7();
    const v23 = f7(f7, f1, v22);
    const v25 = f7(7, f1);
    f7();
    f7(v25, Math, v22);
    f7();
    f7(selfOf, f7(f1, selfOf, f7(selfOf, 7, f7())), v23);
    return 7;
}
f1.apply();
