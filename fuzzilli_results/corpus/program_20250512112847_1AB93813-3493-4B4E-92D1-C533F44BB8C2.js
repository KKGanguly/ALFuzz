class C1 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this.constructor;
    try { new v6(); } catch (e) {}
    C1.a = a4;
    this.a = -1813245652n;
}
new F2(F2, -1813245652n);
new F2();
