const v0 = {};
function f1(a2, a3) {
    return a3;
}
Error.prepareStackTrace = f1;
try {
    throw Error();
} catch(e6) {
    const v8 = e6.stack[0];
    v8.getThis(v8, v8, v0, Error).hasOwnProperty(v0);
}
