function f1() {
    const v4 = this.constructor;
    try { new v4(); } catch (e) {}
    this.y = 42;
    this.y = 87;
}
f1.call(-1934364628n);
new f1();
f1();
