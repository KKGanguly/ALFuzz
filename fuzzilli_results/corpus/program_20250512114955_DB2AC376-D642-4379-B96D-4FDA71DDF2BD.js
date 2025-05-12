function f1(a2, a3, a4) {
    function f5() {
        return Array;
    }
    function f6() {
        return f6;
    }
    function f7() {
        return f7;
    }
    function f8() {
        return f7;
    }
    function f9() {
        return a2;
    }
    function f10() {
        const v11 = Array();
        for (let v12 = 0; v12 < 5; v12++) {
            v11[v12];
        }
        return Array;
    }
    const v14 = [f5,f6,f7,f8,f9,f10];
    for (let i16 = 0; i16 < v14.length; i16++) {
        const v22 = v14[i16];
        v22(i16, v22);
    }
    return f6;
}
const v24 = f1();
const v25 = f1(Array, f1, v24);
const v26 = f1();
const v27 = f1(v24, v26, v26);
const v28 = f1();
const v29 = f1();
f1();
const v31 = f1(v29, v29, v26);
const v32 = f1(v31, v29, v24);
f1(v27, v32, f1);
f1(v25, v32, v31);
f1(v29, v28, v26);
f1();
