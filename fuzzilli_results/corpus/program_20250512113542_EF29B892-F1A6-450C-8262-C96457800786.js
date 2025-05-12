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
    return f0;
}
function f4() {
    return f2;
}
function f5() {
    return ("2").normalize("NFC");
}
const v9 = [f0,f1,f2,f3,f4,f5];
for (let i11 = 0; i11 < v9.length; i11++) {
    const t20 = v9[i11];
    t20();
}
