class C3 {
    constructor(a5) {
        super[this];
    }
}
function f10(a11, a12) {
    return a12;
}
Error.prepareStackTrace = f10;
try {
    throw Error();
} catch(e21) {
    e21.stack[0].getPromiseIndex();
}
