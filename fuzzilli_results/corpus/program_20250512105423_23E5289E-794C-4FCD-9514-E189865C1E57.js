function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4, a5, a6) {
    return a5;
}
class C7 extends f2 {
    static {
        try {
            this.replace(F0);
        } catch(e10) {
        }
    }
}
