function f0() {
    this.x = 42;
    try { this.constructor(); } catch (e) {}
    this.y = 87;
    return 87;
}
new f0();
function f8(a9) {
    a9 ^ a9;
    return f0;
}
Object.prototype.__defineSetter__("x", f8);
new f0();
const v15 = new f0();
v15.y = undefined;
