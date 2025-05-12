function f0() {
    var left = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    var right = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
    for (let i8 = (() => {
            const t0 = [f0,f0,f0,f0,f0];
            delete t0[right];
            return 0;
        })();
        i8 < 100000;
        (() => {
            i8++;
            const v13 = {};
            const v14 = {};
            const v15 = {};
            [v13,v14,v15,{}];
        })()) {
        (left + right).substring(20, 80).indexOf("Y");
    }
}
f0();
