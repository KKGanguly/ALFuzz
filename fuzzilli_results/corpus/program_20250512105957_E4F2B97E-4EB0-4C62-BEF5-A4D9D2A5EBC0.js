function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
new Date(false, WeakSet, false, WeakSet, F1, F1, false);
try { Reflect.construct(); } catch (e) {}
