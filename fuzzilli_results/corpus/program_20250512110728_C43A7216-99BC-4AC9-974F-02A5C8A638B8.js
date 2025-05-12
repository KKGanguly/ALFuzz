function f6(a7, a8) {
    return a8;
}
Error.prepareStackTrace = f6;
try {
    throw Error(/(invalid regexp)/);
} catch(e12) {
    const v14 = e12.stack[0];
    const v15 = v14.getThis();
    function f16(a17, a18) {
        try { a17.externalizeString(); } catch (e) {}
        for (let i26 = (() => {
                0 - 0;
                return 0;
            })();
            i26 < "invalid";
            i26++) {
            function f33() {
            }
        }
    }
    v15.toString = f16;
    v15.toString(v15, v14);
}
