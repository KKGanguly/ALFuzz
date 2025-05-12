function f0() {
    var r = 1;
    function f3() {
        var fr = r;
        function f5(a6) {
            r + fr;
            return fr;
        }
        let v9;
        try { v9 = this.f(fr, f0); } catch (e) {}
        return v9;
    }
    this.f = f3;
    this.f(this);
    return r;
}
const v13 = new f0();
const t17 = v13.f;
t17();
