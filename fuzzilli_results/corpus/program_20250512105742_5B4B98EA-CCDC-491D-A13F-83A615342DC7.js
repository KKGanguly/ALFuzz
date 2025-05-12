new Float64Array(Float64Array);
function f2(a3, a4) {
    return a4;
}
Error.prepareStackTrace = f2;
try {
    throw Error(Float64Array);
} catch(e7) {
    const v9 = e7.stack[0];
    v9.isEval(e7);
    v9.getThis().toString().trimEnd();
}
