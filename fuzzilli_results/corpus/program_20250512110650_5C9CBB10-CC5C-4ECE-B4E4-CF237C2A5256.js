function f0() {
    var left = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    var right = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
    for (let i6 = 0; i6 < 100000; i6++) {
        left + right;
    }
    return right;
}
f0();
