function f1() {
    return -577.9545740439988;
}
class C2 extends f1 {
}
const v4 = new Int16Array();
const v5 = v4.copyWithin(C2, -577.9545740439988);
function f6(a7, a8) {
    return a8;
}
Error.prepareStackTrace = f6;
try {
    throw Error(f6);
} catch(e11) {
    const v14 = e11.stack[0].constructor;
    try { v14(f6, v5); } catch (e) {}
}
