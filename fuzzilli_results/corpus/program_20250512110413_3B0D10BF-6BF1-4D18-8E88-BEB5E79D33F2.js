function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
}
class C6 extends F3 {
    set e(a8) {
        F3.a &= a8;
    }
}
