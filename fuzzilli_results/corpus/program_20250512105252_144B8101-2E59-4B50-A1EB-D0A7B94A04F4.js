class C0 {
    constructor(a2) {
        super[a2] = a2;
    }
}
const v3 = new C0();
const v4 = new C0(C0);
const v5 = new C0();
const v6 = v5.constructor;
new v6(C0, v3, v6, C0, C0);
function f8(a9, a10, a11, a12) {
    const v13 = a9.constructor;
    try { new v13(a10); } catch (e) {}
    return { __proto__: C0 };
}
f8(v4, f8(v4, v5));
f8(v4);
