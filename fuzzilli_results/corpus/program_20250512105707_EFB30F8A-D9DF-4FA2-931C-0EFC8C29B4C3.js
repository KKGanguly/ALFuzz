function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this.constructor;
    try { new v6(this, a5); } catch (e) {}
}
F1.constructor("-1048549011");
new F1();
new F1();
new F1();
