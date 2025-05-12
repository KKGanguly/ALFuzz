function f1() {
    return BigInt64Array;
}
BigInt64Array.toString = f1;
function f2() {
    return f2;
}
const v3 = f2.constructor;
try { v3(BigInt64Array); } catch (e) {}
