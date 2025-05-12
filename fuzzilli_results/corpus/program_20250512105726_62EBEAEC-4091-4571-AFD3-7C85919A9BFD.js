function f0() {
    return f0;
}
function f1() {
    return f1;
}
function f2() {
    return f2;
}
function f3() {
    return f0;
}
function f4() {
    Int32Array.f = Int32Array;
    return f2;
}
const v6 = [f0,f1,f2,f3,f4];
for (let v7 = 0; v7 < 5; v7++) {
    const v8 = v6[v7];
    v8(v7, v7, v8, f0);
}
