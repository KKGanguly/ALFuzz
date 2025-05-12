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
    return f2;
}
function f5() {
    for (let v6 = 0; v6 < 5; v6++) {
        function f7() {
            for (let v8 = 0; v8 < 10; v8++) {
            }
            return f7;
        }
        f7();
    }
    return f3;
}
const v10 = [f0,f1,f2,f3,f4,f5];
for (let i12 = 0; i12 < v10.length; i12++) {
    const v18 = v10[i12];
    v18(f3, v18);
}
