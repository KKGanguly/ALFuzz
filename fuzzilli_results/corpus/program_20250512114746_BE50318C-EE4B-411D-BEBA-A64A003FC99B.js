function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
class C5 extends F1 {
}
Object.defineProperty(C5, "undefined", { configurable: true, value: Set });
function f6() {
    C5[undefined] = [0.3644010008870404,-3.980343058152296,3.9143477915927765];
    return Set;
}
f6();
f6();
