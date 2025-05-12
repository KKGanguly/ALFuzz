function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 0;
    function f3(a4) {
        let v5 = 0;
        for (let i7 = 0; i7 < 10; i7++) {
            v5 += a4?.[a4];
            if (i7) {
                v5 -= a4;
            }
        }
        return F0;
    }
    f3();
    f3();
}
new F0();
new F0();
new F0();
