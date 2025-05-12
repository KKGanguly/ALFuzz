function f0(a1, a2, a3, a4) {
    return a1;
}
function f5() {
    const v6 = f0.arguments;
    v6.length = v6;
    return v6;
}
try { f5.call(f0, f5, f0); } catch (e) {}
