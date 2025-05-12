const v1 = new WeakSet();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this.constructor;
    try { v6(v1, a5); } catch (e) {}
}
F2.prototype = F2;
new F2(v1, F2);
