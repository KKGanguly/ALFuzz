function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
function f3(a4, a5) {
    return f3;
}
F0[Symbol.matchAll] = f3;
