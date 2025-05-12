class C2 {
}
const v3 = new C2();
function f4() {
}
class C5 extends C2 {
}
new C5();
v3[16] = f4;
C2[0];
gc({ execution: "async", type: "minor" });
const t11 = 0;
t11.constructor = {};
const v18 = Array.prototype.concat;
try { v18.call(0); } catch (e) {}
