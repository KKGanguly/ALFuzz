function f0(a1, a2) {
}
function f3() {
    const v4 = new f0();
    return (v4 + v4) + v4;
}
function f7() {
    const v8 = f0 + f0;
    v8 / v8;
    return v8 + f0;
}
function f11(a12, a13) {
    let v14 = a13(f11, a13, a13);
    v14--;
    return v14;
}
f11(4, f3);
f11(8, f7);
