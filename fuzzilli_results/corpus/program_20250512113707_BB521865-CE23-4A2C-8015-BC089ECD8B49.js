function f0() {
    function f1(a2) {
        let v3 = 0;
        for (let v4 = 0; v4 < 25; v4++) {
            v3 -= a2;
            v4++;
        }
        return v3;
    }
    f1();
    f1(Int32Array);
    return f0;
}
f0();
f0();
f0();
