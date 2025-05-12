function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
class C4 extends F0 {
}
const v7 = new Proxy(F0, {});
v7 instanceof C4;
