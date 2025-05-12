function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    try { new this(2.2250738585072014e-308); } catch (e) {}
    a4 | a4;
    this.b = a4;
}
new F2(-7.8241834071625815);
new F2();
