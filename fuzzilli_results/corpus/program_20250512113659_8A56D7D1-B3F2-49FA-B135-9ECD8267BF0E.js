function f0() {
    const v2 = -Infinity;
    const v5 = {
        [v2](a4) {
        },
        257: 1.7976931348623157e+308,
    };
    return v5;
}
const v6 = f0();
const v7 = f0();
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    const v12 = this.constructor;
    try { new v12(v7, F8); } catch (e) {}
    a10[257] = a10;
    a11[257] = a11;
}
new F8(v6, v6);
new F8(v6, v7);
new F8(v7, v7);
