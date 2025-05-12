function f0() {
    return { 1: -4 };
}
const v3 = f0();
const v4 = f0();
class C5 extends f0 {
}
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    const v12 = this.constructor;
    try { new v12(a10, this, v4); } catch (e) {}
    a8[1];
}
new F6(v3, C5, v3);
new F6(f0);
