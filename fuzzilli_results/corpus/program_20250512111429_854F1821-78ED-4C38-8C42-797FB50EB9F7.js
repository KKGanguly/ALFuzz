function f0(a1, a2) {
    const v3 = { 1073741823: a1 };
    return f0;
}
f0();
function f5() {
    return f5;
}
function f6() {
    return f6;
}
function f7() {
    return f7;
}
function f8() {
    return f7;
}
function f9() {
    return f9;
}
function f10() {
    gc();
    return f5;
}
const v13 = [f5,f6,f7,f8,f9,f10];
for (let i15 = 0; i15 < v13.length; i15++) {
    const t26 = v13[i15];
    t26();
}
