function f0(a1, a2) {
    return a2;
}
Error.prepareStackTrace = f0;
try {
    throw Error();
} catch(e5) {
    const v7 = e5.stack[0];
    v7.getEvalOrigin(v7, v7, e5, v7);
}
