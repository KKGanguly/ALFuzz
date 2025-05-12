function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
F0.prototype = F0;
const v4 = new F0(F0, F0);
try { v4.bind(); } catch (e) {}
