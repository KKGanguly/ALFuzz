function f0() {
    var right = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
    for (let i4 = 0; i4 < 100000; i4++) {
        ("YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY" + right).substring(20);
    }
    return right;
}
f0();
