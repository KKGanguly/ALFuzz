function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
function f12(a13) {
    for (let v16 = 0; v16 < 50; v16++) {
        try { v4.m(); } catch (e) {}
    }
    return a13;
}
f12();
