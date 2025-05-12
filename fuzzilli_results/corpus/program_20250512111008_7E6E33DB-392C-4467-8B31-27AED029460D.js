function f1() {
    selfOf(this);
    return f1;
}
function selfOf(a5) {
    a5[0] = a5;
    return a5;
}
f1.apply(3);
