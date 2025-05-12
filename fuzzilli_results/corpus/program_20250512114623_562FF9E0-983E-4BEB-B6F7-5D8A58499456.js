function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    const v11 = this.constructor;
    try { new v11(F5, 23594, a9, v11); } catch (e) {}
    this.a = a9;
}
new F5();
new F5();
const v15 = new F5();
v15.e = v15;
