function f0(a1, a2, a3, a4) {
    return f0;
}
function f5() {
    const v6 = f0.arguments;
    v6[0] = v6;
    return f5;
}
try { f5(); } catch (e) {}
