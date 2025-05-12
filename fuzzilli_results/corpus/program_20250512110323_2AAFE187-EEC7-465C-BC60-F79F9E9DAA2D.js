class C1 {
    constructor(a3, a4, a5, a6) {
        const v7 = a4.constructor;
        try { new v7(268435440n, a4); } catch (e) {}
    }
}
new C1(268435440n, 268435440n);
const v11 = /\u0034/dg.constructor;
try { v11(C1, C1); } catch (e) {}
