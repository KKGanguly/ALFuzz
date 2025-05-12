const v2 = new WeakSet();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = this.constructor;
    try { new v7(); } catch (e) {}
    Number.isFinite(a6);
    this.a = v2;
    this.f = WeakSet;
    this.d = Infinity;
}
new F3();
new F3(F3, F3);
new F3();
