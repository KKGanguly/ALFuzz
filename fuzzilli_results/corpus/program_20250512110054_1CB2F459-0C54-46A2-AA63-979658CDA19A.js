for (let v0 = 0; v0 < 50; v0++) {
    function f1() {
    }
    function f2() {
    }
    function f3() {
    }
    function f4() {
    }
    function f5() {
    }
    function f6() {
        const v9 = Array(4);
        for (let v10 = 0; v10 < 5; v10++) {
            v9[v10];
        }
    }
    const v12 = [f1,f2,f3,f4,f5,f6];
    for (let i14 = 0; i14 < v12.length; i14++) {
        const t19 = v12[i14];
        t19();
    }
}
