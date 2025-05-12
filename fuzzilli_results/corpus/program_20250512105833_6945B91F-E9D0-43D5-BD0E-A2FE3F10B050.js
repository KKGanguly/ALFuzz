function f0(a1, a2) {
    const v3 = {};
    function f4(a5) {
        return a2;
    }
    Object.defineProperty(v3, Symbol, { writable: true, configurable: true, set: f4 });
    return f0;
}
try { f0(); } catch (e) {}
