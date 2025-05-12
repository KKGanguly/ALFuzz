function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0();
const v4 = new F0();
v3.a &= v4;
%VerifyType(v3);
const v5 = v4[v3];
v5 ?? v5;
v5?.[121];
const v8 = v4[v4];
new F0();
class C10 {
    toString(a12) {
        v4.a;
        return F0;
    }
    static p(a16, a17) {
    }
    static e = F0;
    static [F0];
    e;
}
const v19 = new C10();
new C10();
const v21 = new C10();
v21.e;
let v23 = 10;
-v23;
v23++;
function f27(a28, a29) {
}
f27(v19);
const v33 = Uint8Array.hasOwnProperty;
try { v33.apply(v8); } catch (e) {}
