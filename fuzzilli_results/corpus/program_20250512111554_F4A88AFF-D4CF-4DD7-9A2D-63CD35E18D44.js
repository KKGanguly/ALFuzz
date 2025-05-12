function f0() {
    return f0;
}
function f1() {
    return f0;
}
function f2() {
    Math.asinh(6125);
    return 6125;
}
function f6() {
    return f2;
}
function f7() {
    return f2;
}
const v8 = [f0,f1,f2,f6,f7];
for (let v9 = 0; v9 < 5; v9++) {
    const t18 = v8[v9];
    t18();
}
