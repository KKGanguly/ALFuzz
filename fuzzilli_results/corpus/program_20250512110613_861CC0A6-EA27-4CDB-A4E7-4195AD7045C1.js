Number.prototype.toExponential(5);
function f4(a5, a6) {
    return a6;
}
Error.prepareStackTrace = f4;
try {
    throw Error();
} catch(e9) {
    e9.stack[0].getFileName();
}
