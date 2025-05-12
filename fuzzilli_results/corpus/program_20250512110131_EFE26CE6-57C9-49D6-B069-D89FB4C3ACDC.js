function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4, a5) {
    return f2;
}
f2.c = F0;
Number.__proto__ = f2;
f2.asyncIterator;
