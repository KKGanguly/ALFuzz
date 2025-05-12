function f0(a1, a2) {
    return a2;
}
Error.prepareStackTrace = f0;
try {
    throw Error(/(invalid regexp)/);
} catch(e6) {
    const v8 = e6.stack[0];
    const v9 = v8.getThis();
    v9.toString(v9, v8);
}
