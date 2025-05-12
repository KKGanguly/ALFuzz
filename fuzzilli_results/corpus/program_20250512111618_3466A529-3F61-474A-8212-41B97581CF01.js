function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this.constructor;
    try { new v6(); } catch (e) {}
    a5 ^ a5;
}
new F0();
new F0();
function f12() {
}
f12.constructor(0);
