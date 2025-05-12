class C0 {
}
class C1 extends C0 {
}
const v3 = new Set();
try { v3.isSubsetOf(C1); } catch (e) {}
const v6 = Symbol.iterator;
Symbol.for(v6.description);
const v9 = v3[v6]();
function f10() {
    return Symbol;
}
v9.next = f10;
