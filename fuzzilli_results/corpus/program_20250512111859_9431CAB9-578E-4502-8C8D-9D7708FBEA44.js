function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    a4--;
    const v6 = this.constructor;
    try { new v6(); } catch (e) {}
    this.h = a4;
}
new F0();
const v9 = new F0();
new F0(v9, v9, v9);
