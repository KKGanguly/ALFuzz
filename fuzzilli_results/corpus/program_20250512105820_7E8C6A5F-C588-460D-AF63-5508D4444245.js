function f0(a1) {
    return f0;
}
class C2 {
}
const v3 = new C2();
v3[Symbol.toPrimitive] = f0;
let v7;
try { v7 = getIgnitionDispatchCounters.filter(); } catch (e) {}
const v8 = new C2();
v8.x = v7;
