function f0() {
    return f0;
}
function f1() {
    return f1;
}
function f2() {
    return f0;
}
function f3() {
    return f1;
}
function f4() {
    const v6 = new Int32Array();
    v6.lastIndexOf();
    return f2;
}
const v8 = [f0,f1,f2,f3,f4];
for (let v9 = 0; v9 < 5; v9++) {
    v8[v9].call();
}
