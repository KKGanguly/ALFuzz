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
    return f0;
}
function f4() {
    return f3;
}
function f5() {
    const v7 = new Set();
    const v10 = v7[Symbol.iterator]();
    let v11;
    try { v11 = v10.drop(f1); } catch (e) {}
    return v11;
}
const v12 = [f0,f1,f2,f3,f4,f5];
for (let i14 = 0; i14 < v12.length; i14++) {
    const t24 = v12[i14];
    t24();
}
