function f1() {
    const v4 = this?.constructor;
    try { new v4(); } catch (e) {}
    this.y = 42;
    this.x = 42;
    return f1;
}
f1.call(-1934364628n);
function f8(a9) {
    return f1;
}
Object.prototype.__defineSetter__("x", f8);
new f1();
new f1();
f1.call();
