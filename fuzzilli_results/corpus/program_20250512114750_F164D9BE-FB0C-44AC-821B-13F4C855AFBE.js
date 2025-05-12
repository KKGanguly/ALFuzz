function f0() {
    const v2 = this?.constructor;
    try { new v2(); } catch (e) {}
}
f0();
new f0();
new f0();
function f8(a9) {
}
Object.__defineSetter__("x", f8);
f0();
