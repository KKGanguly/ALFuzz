function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4) {
    return { 4294967295: a3 };
}
class C6 extends f2 {
    constructor(a8, a9, a10) {
        super();
        a10[1] = F0;
        try {
            super.keys();
        } catch(e12) {
        }
    }
}
new C6(F0, F0, C6);
new C6(f2, F0, f2);
