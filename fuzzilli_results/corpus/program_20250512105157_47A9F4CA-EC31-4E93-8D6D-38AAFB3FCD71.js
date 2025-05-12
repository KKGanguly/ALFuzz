function f0() {
    return f0;
}
function f1() {
    return f1;
}
const t6 = f0.prototype;
t6.f = f1;
