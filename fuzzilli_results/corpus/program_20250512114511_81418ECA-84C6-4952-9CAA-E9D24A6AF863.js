class C0 {
}
function f1() {
    var left = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    var right = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
    for (let i7 = 0; i7 < 100000; i7++) {
        var cons = left + right;
        var index = cons.substring(20, 80).indexOf("Y");
        let v21 = 34;
        v21++;
        function f23(a24, a25) {
            a24 | 0;
        }
        f23();
        f23();
        f23();
        f23();
        f23();
        f23();
    }
}
f1();
