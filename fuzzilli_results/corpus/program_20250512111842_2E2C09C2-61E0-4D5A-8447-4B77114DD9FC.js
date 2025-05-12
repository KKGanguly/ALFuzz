function f0() {
    return f0;
}
function f1() {
    return f1;
}
function f2() {
    return f1;
}
function f3() {
    return f3;
}
function f4() {
    return f2;
}
function f5() {
    Math.tan(~1);
    return Math;
}
const v10 = [f0,f1,f2,f3,f4,f5];
for (let i12 = 0; i12 < v10.length; i12++) {
    const t21 = v10[i12];
    t21();
}
