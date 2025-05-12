function f0() {
    return f0;
}
function f1() {
    return f1;
}
function f2(a3, a4) {
    Math.acosh(9007199254740990);
    Math.cbrt();
    return f0;
}
f1.valueOf = f2;
function f9() {
    return f1;
}
function f10() {
    return f2;
}
function f11() {
    return f10;
}
function f12() {
    const v14 = new Set();
    const v17 = v14[Symbol.iterator]();
    let v18;
    try { v18 = v17.drop(f1); } catch (e) {}
    return v18;
}
const v19 = [f0,f1,f9,f10,f11,f12];
for (let i21 = 0; i21 < v19.length; i21++) {
    const t30 = v19[i21];
    t30(i21, f1);
}
