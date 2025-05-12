function f0() {
    return f0;
}
function f1() {
    return {};
}
const v3 = f1();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = this.constructor;
    try { new v8(this, F4); } catch (e) {}
    a7.d = a7;
    this.h = a7;
    this.c = a7;
}
new F4(f0, f1);
new F4(F4, v3);
4294967297 - 4294967297;
