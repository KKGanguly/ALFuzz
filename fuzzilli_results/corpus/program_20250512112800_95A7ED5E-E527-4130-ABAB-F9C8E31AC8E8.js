function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    try { new v5(); } catch (e) {}
    this.c = Float64Array;
}
const v7 = new F1(F1, F1);
new F1(Float64Array, v7);
new F1(v7, v7);
