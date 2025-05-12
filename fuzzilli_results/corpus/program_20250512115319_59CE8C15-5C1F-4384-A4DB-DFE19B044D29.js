function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = this.constructor;
    try { new v4(-4294967296, a3, F1, v4); } catch (e) {}
    this.f = -4294967296;
    [,];
    const v9 = {
        length: -4294967296,
        valueOf() {
            return this;
        },
    };
}
const v10 = new F1(-4294967296);
new F1(v10);
new F1();
