const v3 = [-1.0,5.005967506352411,2.0,-3.0];
function f4() {
    function f5(a6) {
        new Uint32Array(0);
        new Float64Array(8);
        new BigUint64Array(7);
        return v3;
    }
    return f5;
}
function f16(a17) {
    function f18() {
        return a17;
    }
}
Object.defineProperty(v3, Symbol.toPrimitive, { configurable: true, get: f4, set: f16 });
const v21 = [1.4680630342120967e+308,0.12125401713985995,1000000.0,890.5711738748998,-5.0,5.0,-2.220446049250313e-16];
v21[5];
const v23 = [2.2250738585072014e-308,-1000000000000.0,0.46424515369686326,4.191890394613459,-2.2250738585072014e-308];
v23.toString = f16;
v23[4];
function F25(a27, a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 1.9905083585390695e+306;
    function f31() {
        function RunOneTruncationTest(a33, a34) {
            a33 | 0;
        }
        const v37 = RunOneTruncationTest();
        RunOneTruncationTest();
        return v37;
    }
    a28.valueOf = f31;
    const v41 = [0,1];
    function f42(a43) {
        const v45 = { length: 0 };
        Object.defineProperty(v45, "length", { writable: false });
    }
    const v52 = Symbol.species;
    const v53 = { [v52]: f42 };
    const v56 = Array.prototype;
    try { v56.call(v41); } catch (e) {}
    a30.constructor = f31;
    a28[3] = a28;
    try { a30.slice(a30, a27); } catch (e) {}
    this.d = a28;
}
new F25(F25, v3, 1.9905083585390695e+306, v23);
const v62 = ["invalid",23];
for (let i64 = 0; i64 < v62.length; i64++) {
    try {
        const v71 = Error?.captureStackTrace;
        try { new v71(Error, v21); } catch (e) {}
    } catch(e73) {
    }
}
