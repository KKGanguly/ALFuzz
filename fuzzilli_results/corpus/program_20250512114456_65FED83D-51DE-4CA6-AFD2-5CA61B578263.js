function f0() {
    var r = 1;
    function f3() {
        function f4(a5) {
            let v6 = r + r;
            v6++;
            return v6;
        }
        this.g = f4;
        return f3;
    }
    const v10 = this.constructor;
    try { new v10(); } catch (e) {}
    this.f = f3;
    this.f(v10);
    this.g(this);
    return f0;
}
new f0();
