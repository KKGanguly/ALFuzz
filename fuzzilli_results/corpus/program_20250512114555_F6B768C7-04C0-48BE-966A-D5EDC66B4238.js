function f0() {
    var left = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    var right = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
    for (let i6 = 0;
        i6 < 100000;
        (() => {
            const v10 = {};
            const v11 = {};
            const v12 = {};
            [v10,v11,v12,{}];
            i6++;
        })()) {
        (left + right).substring(20, 80).indexOf("Y");
    }
}
f0();
