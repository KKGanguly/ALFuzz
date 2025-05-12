const v1 = new Set();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this.constructor;
    try { new v6(v1, a4, v6); } catch (e) {}
    this.f = v1;
}
new F2(v1, Set);
new F2(F2, v1);
new F2();
