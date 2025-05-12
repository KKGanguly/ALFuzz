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
    return f3;
}
function f5() {
    for (let v6 = 0; v6 < 5; v6++) {
        Array.__proto__ = null;
    }
    return f4;
}
const v9 = [f0,f1,f2,f3,f4,f5];
for (let i11 = 0; i11 < v9.length; i11++) {
    const v17 = v9[i11];
    v17(f0, i11, v17);
}
