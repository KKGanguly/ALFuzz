function f1() {
    return 2147483648;
}
f1.prototype = 2147483648;
function f2() {
    return {} instanceof f1;
}
try { f2(); } catch (e) {}
