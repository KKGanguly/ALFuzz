function f0(a1) {
    const v3 = [,,];
    v3[1] = 0;
    v3[2] = 2;
    function f6(a7, a8, a9) {
        const t5 = v3.__proto__;
        t5[0] = 1;
        return f6;
    }
    v3.forEach(f6);
    return a1;
}
f0();
const v14 = f0();
f0(v14);
f0(v14);
