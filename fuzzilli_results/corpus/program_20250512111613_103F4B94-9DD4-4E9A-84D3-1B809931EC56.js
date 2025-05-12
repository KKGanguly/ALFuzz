class C0 {
    constructor(a2, a3, a4) {
        const v5 = this?.constructor;
        try { new v5(); } catch (e) {}
        const v7 = this[3];
        v7 ?? v7;
    }
    #f;
}
const v9 = new C0(C0, C0, C0);
const t10 = v9.constructor;
new t10();
new C0();
