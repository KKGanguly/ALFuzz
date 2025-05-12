function f0() {
    return f0;
}
function f1() {
    return f0;
}
function f2() {
    return f1;
}
function f3() {
    return f1;
}
function f4() {
    const v7 = new Int32Array(4);
    v7.toSorted();
    return f2;
}
const v9 = [f0,f1,f2,f3,f4];
for (let v10 = 0; v10 < 5; v10++) {
    const t19 = v9[v10];
    t19();
}
