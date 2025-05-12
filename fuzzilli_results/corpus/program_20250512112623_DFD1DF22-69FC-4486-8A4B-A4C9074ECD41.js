function f1() {
    var left = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    var right = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
    for (let i7 = 0; i7 < 100000; i7++) {
        (left + right).substring(20).indexOf(5);
    }
    return left;
}
f1();
