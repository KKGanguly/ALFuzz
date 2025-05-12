function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.x = 1;
    this.z = 3;
    this.e = -11;
    this.b = -11;
    this.a = -11;
}
const v7 = new F0();
const v8 = { __proto__: v7, ...v7 };
