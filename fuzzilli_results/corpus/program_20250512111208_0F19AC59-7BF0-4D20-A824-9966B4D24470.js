class C3 {
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = this.constructor;
    try { new v8(C3, 268435440); } catch (e) {}
    ~a7;
}
new F4(10, 6);
new F4(6, 268435440);
new F4();
