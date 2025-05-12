function f0(a1, a2) {
    a1 ?? a1;
    const v4 = a2 ?? a2;
    v4 ?? v4;
    return a2;
}
function f6() {
    f0();
    const v8 = f0();
    const v9 = f0();
    const v10 = f0(v9, v8);
    f0(v9, f0());
    const v14 = f0(v10, f0());
    f0(v8, f0());
    f0(v9, f0);
    f0();
    f0();
    f0(v14, v8);
    return f0;
}
f6();
f6();
f6();
