function f0(a1) {
    const v2 = [f0,f0,f0,f0,f0];
    v2[2] = v2;
    v2[1] = 0;
    function f4(a5, a6, a7) {
        const v8 = v2.__proto__;
        v8.indexOf(a5);
        v8[2] = 0;
        return a5;
    }
    v2.forEach(f4);
    return 0;
}
f0();
f0();
