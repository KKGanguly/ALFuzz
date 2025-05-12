function f0() {
    return f0;
}
function f1() {
    return f0;
}
function f2(a3, a4, a5) {
    return { __proto__: a5, 1073741824: f1 };
}
const v7 = f2(f1, f1, f0);
f2(v7, f0, v7);
