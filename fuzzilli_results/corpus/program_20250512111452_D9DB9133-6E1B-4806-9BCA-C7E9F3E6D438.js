function f1(a2, a3) {
    return a3;
}
Error.prepareStackTrace = f1;
try {
    throw Error();
} catch(e6) {
    const v7 = e6.stack;
    v7.concat(Uint32Array);
    v7[0].isConstructor();
}
