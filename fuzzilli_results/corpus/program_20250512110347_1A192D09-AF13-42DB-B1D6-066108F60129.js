function f0(a1, a2, a3, a4) {
    return a3;
}
function f5() {
    f0.arguments.length;
    return f0;
}
try { f5(); } catch (e) {}
