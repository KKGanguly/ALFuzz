function f0(a1, a2, a3, a4) {
    baz();
    return a4;
}
function baz() {
    f0.arguments;
    return f0;
}
f0();
