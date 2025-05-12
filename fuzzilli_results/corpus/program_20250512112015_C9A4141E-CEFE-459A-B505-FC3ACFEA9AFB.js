function f0(a1) {
    for (let v2 = 0; v2 < 25; v2++) {
        function f3() {
            this.x = 42;
            return f3;
        }
        new f3();
        var result_x;
        function f10(a11) {
            result_x = a11;
            return f0;
        }
        f3.call(Object.prototype.__defineSetter__("x", f10), f0);
    }
    return a1;
}
f0();
