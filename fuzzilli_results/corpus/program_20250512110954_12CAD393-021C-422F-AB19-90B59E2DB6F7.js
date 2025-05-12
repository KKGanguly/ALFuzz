class C0 {
}
function f1(a2, a3) {
    return a2;
}
function f4(a5, a6) {
    a5[2070338844] = a5;
    const v7 = { 3946: C0 };
    Object.defineProperty(v7, 9, { configurable: true, value: f1 });
    return v7;
}
const v8 = f4(C0);
f4(v8);
const v10 = { ...v8 };
