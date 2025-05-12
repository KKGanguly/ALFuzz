function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
}
for (let v3 = 0; v3 < 5; v3++) {
    C2["p" + v3] = v3;
    C2[4096];
}
