function f0() {
    var left = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    var right = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
    for (let i6 = 0; i6 < 100000; i6++) {
        var cons = left + right;
        cons.substring(20, 80).indexOf("Y");
        var index = 20;
    }
}
f0();
