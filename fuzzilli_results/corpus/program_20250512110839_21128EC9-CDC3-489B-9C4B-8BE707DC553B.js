function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
F0.toString = Symbol;
F0.toString();
