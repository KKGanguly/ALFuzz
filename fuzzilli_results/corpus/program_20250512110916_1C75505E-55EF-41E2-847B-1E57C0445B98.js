function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function f5() {
    function f6(a7) {
        return 65535n;
    }
    return f6;
}
Object.defineProperty(F1, "toString", { get: f5 });
F1 < 80;
