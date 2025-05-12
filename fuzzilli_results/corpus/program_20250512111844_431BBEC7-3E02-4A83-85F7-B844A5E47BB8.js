const v0 = [];
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
class C7 {
    static {
        const v9 = this instanceof F1;
        try { v0.findLast(v9); } catch (e) {}
    }
}
