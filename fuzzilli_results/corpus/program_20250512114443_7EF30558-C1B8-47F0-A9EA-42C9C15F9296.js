function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = this.constructor;
    try { new v8(a5, this); } catch (e) {}
    a6++;
    this.g = a5;
    this.f = a6;
}
new F3(1203);
new F3(2);
new F3(91);
const v16 = { type: "major" };
gc();
