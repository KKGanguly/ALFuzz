class C0 {
}
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
function f7(a8, a9) {
    return 562949953421312;
}
const v12 = Symbol.toPrimitive;
F1[v12] = f7;
class C13 {
    constructor(a15, a16, a17) {
        super[F1] = C0;
    }
}
new C13(Symbol, v12, Symbol);
