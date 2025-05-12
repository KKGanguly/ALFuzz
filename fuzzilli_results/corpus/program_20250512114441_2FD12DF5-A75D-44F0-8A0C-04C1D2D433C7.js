function f0() {
    return f0;
}
function f1() {
    return f0;
}
const v2 = f0.prototype;
gc();
v2.f = f1;
