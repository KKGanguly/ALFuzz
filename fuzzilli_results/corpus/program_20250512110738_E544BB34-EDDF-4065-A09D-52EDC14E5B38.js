function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
const v9 = {
    valueOf(a6, a7, a8) {
        return;
    },
};
function f10(a11, a12) {
    return a12;
}
Error.prepareStackTrace = f10;
try {
    throw Error(v9);
} catch(e15) {
    const v16 = e15.stack;
    const v17 = v16[0];
    v17.getColumnNumber();
    const v19 = v17.getThis();
    v19.toString(v19, Error, v16, v17).includes(v4);
}
