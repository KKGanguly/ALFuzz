class C4 {
}
for (let v5 = 0; v5 < 25; v5++) {
    Array["p" + v5] = v5;
}
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    const v12 = this.constructor;
    try { new v12(C4, -8); } catch (e) {}
    ~a11;
    this.f = 6;
}
new F8(10, 6);
new F8();
new F8();
