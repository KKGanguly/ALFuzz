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
    return f3;
}
function f4() {
    return f4;
}
function f5() {
    function f7() {
        this.z = 3;
        return 3;
    }
    Object.defineProperty(Array, 3, { configurable: true, get: f7 });
    for (let v10 = 0; v10 < 5; v10++) {
        Array[v10];
    }
    return f0;
}
const v12 = [f0,f1,f2,f3,f4,f5];
for (let i14 = 0; i14 < v12.length; i14++) {
    const t28 = v12[i14];
    t28();
}
