function f0(a1, a2, a3, a4) {
    return baz(f0, baz, f0);
}
function baz() {
    return f0.arguments[0];
}
f0(11);
