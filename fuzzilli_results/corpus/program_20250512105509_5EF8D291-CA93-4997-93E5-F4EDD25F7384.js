function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2(a3, a4) {
        return a4;
    }
    Error.prepareStackTrace = f2;
    try {
        throw Error();
    } catch(e7) {
        e7.stack;
    }
}
new F0();
new F0();
