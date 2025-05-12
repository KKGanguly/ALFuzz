function f0() {
    return { 65535: 1377026217 };
}
class C3 extends f0 {
}
const v4 = new C3();
class C5 {
    static set c(a7) {
    }
}
const v8 = new C5();
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    a12[65535] = a12;
}
new F9(C5, v4);
const v16 = new F9(C3, v8);
new F9(v16, v16);
function f18() {
    return v8;
}
const v19 = f18.fill;
try { v19(); } catch (e) {}
