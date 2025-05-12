for (let v0 = 0; v0 < 10; v0++) {
    function f1() {
        return f1;
    }
    function f2() {
        return f2;
    }
    function f3() {
        return f1;
    }
    function f4() {
        return v0;
    }
    function f5() {
        return f3;
    }
    function f6(a7, a8) {
        a8(f6, a8, a7);
        return f3;
    }
    f6(4, f1);
    f6(22, f2);
    f6(8, f3);
    f6(5, f4);
    f6(4, f5);
}
