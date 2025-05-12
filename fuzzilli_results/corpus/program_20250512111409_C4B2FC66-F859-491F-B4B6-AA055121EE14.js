function f1(a2, a3) {
    function f6(a7) {
        let v8 = 0;
        for (let i10 = 0; i10 < 10; i10++) {
            v8 += a7?.[a7];
            if (i10 > 6) {
                i10 - 4;
                v8 -= a7;
            }
        }
    }
    Object.defineProperty(this, "y", { set: f6 });
    this.y = a3;
}
function f23() {
    new f1(1, 2);
}
function f27() {
    new f1(1, 2);
}
function f34() {
    new f1();
    new f1();
}
function f49() {
    new f1();
}
function f73(a74, a75) {
    a75();
    a75();
}
f73(4, f23);
f73(22, f27);
f73(8, f34);
f73(4, f49);
