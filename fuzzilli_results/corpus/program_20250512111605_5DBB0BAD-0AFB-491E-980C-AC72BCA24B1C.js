function f0() {
}
class C1 extends f0 {
}
Object.defineProperty(C1, Symbol.iterator, { configurable: true, enumerable: true, value: f0 });
try { new Uint8Array(C1); } catch (e) {}
