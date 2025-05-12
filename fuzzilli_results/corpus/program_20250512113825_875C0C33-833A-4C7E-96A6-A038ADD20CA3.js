function f0() {
}
Uint16Array.toJSON = Uint32Array;
class C4 extends f0 {
    [BigInt64Array] = Uint16Array;
}
const v5 = new C4();
try { JSON.stringify(v5); } catch (e) {}
