class C3 {
    toString(a5, a6) {
        super[a6];
        baz();
    }
}
const v19 = new C3();
const v20 = new C3();
function F21(a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    try { v19.toString(-2147483649, a24); } catch (e) {}
}
new F21(C3, v20);
