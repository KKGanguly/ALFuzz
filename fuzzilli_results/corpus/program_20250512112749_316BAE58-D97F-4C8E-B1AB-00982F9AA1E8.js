const v0 = /M/msu;
const v1 = /\x01/syuidg;
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    try { new v5(v0); } catch (e) {}
    this.f = a4;
}
new F2(v1);
const v8 = new F2(v1);
new F2(v8);
