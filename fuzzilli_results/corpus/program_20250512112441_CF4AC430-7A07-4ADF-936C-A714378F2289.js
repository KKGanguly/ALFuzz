function f0() {
    ("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX").toLowerCase();
    return f0;
}
f0();
class C4 extends f0 {
}
function f7(a8, a9) {
    return a9;
}
Error.captureStackTrace(C4, C4);
Error.prepareStackTrace = f7;
try {
    const t13 = f0[4294967296];
    t13[147] >>= 9;
} catch(e13) {
    e13.stack[0].getEnclosingColumnNumber();
}
