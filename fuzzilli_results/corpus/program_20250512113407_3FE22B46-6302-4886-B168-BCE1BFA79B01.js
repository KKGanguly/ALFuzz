function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
    9;
}
for (let v3 = 0; v3 < 32; v3++) {
    new C2();
}
