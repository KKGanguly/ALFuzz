function f0(a1, a2) {
    return a2;
}
Error.prepareStackTrace = f0;
try {
    throw Error();
} catch(e5) {
    e5.message = e5;
    const v9 = e5.stack[0].getThis().TypeError;
    try { v9(e5); } catch (e) {}
}
