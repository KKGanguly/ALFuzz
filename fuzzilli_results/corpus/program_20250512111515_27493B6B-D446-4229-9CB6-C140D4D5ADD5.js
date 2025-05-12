function f0(a1, a2) {
    return a2;
}
Error.prepareStackTrace = f0;
try {
    throw Error(Error);
} catch(e5) {
    const v6 = e5.stack;
    v6[0].getFunction();
    function f9(a10, a11) {
        this.x = a10;
        return this;
    }
    function f13() {
        const v14 = new f9(v6, f13);
        v14.constructor(f13);
        return v14.x.caller;
    }
    function f18(a19, a20) {
        a20(a20);
        return Error;
    }
    f18(8, f13);
}
