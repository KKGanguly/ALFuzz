class C3 {
    [-9007199254740990];
    257;
}
const v4 = new C3();
function selfOf(a9) {
    function f12(a13, a14, a15) {
        function f16(a17, a18) {
            a17 >> a17;
            a18 >>> a18;
        }
        f16(selfOf);
        f16(a15, f16());
        f16();
        return -14;
    }
    f12();
    f12(this, 2, f12);
    f12();
    f12();
    f12();
    f12();
    f12(false, false, f12);
    f12();
    f12();
    f12();
    f12(v4, C3, 7);
    for (const v70 in v4) {
        v4[v70];
    }
    return 0;
}
selfOf.apply();
