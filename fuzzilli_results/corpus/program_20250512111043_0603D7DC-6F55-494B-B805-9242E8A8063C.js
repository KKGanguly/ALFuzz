function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this.constructor;
    try { new v6(1.0); } catch (e) {}
    this.h = a5;
}
new F3(1000.0);
const v9 = new F3(1.0);
new F3(-72263.90346150938);
v9.length = v9;
