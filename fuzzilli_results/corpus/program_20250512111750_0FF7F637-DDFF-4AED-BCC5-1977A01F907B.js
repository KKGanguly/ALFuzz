class C1 extends Float64Array {
}
const v2 = new C1();
try { v2.sort(v2); } catch (e) {}
