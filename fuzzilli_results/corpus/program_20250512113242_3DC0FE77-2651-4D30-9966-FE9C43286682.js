class C1 {
    4061 = "-2147483649";
}
const v2 = new C1();
const v3 = new C1();
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = this.constructor;
    try { new v9(a6, v2, a6); } catch (e) {}
    a8[4061];
}
const v12 = new F4(v3, C1, v2);
new F4(v2, v12, v3);
