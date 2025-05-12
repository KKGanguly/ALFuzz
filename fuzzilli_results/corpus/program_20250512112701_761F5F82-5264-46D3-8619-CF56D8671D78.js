var x = 0;
function f2() {
    return x;
}
function f3() {
    this.__defineSetter__("x", f2);
    return "x";
}
try { f3(); } catch (e) {}
