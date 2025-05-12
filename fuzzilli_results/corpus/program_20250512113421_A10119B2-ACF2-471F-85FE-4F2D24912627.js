function f1(a2, a3) {
    return a3;
}
let v5;
try { v5 = Error.captureStackTrace(34); } catch (e) {}
Error.prepareStackTrace = f1;
try {
    throw Error(v5);
} catch(e7) {
    const v8 = e7.stack;
    const v9 = v8[0];
    const t11 = v9.getThis().String;
    const v12 = new t11(v9, v8);
    v12[10] = v12;
}
