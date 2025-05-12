class C0 {
    toString(a2) {
        a2[this] = a2;
    }
}
const v3 = new C0();
try { v3.toString(C0); } catch (e) {}
