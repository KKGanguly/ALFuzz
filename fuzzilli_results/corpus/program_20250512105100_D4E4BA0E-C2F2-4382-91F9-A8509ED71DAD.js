function f0() {
    return f0;
}
function f1() {
    return f0;
}
function f2() {
    return f2;
}
function f3() {
}
function f4() {
    const v7 = new Int32Array(4);
    for (let v8 = 0; v8 < 5; v8++) {
        v7[v8];
    }
    return f3;
}
function f10() {
    const v13 = Array(4);
    for (let v14 = 0; v14 < 5; v14++) {
        v13[v14];
    }
    return v13;
}
const v16 = [f0,f1,f2,f3,f4,f10];
for (let i18 = 0; i18 < v16.length; i18++) {
    const t27 = v16[i18];
    t27();
}
