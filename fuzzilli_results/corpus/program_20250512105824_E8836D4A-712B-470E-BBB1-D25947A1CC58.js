1 + 1;
function f2() {
    function f4() {
        var fr = 1;
        function f6(a7) {
            !a7;
            return fr;
        }
        this.g = f6;
    }
    try { this.constructor(); } catch (e) {}
    this.f = f4;
    this.f();
}
new f2();
