function f0(a1, a2, a3, a4) {
    return f0;
}
function f5() {
    f0.arguments[0];
    return f0;
}
try { f5(); } catch (e) {}
