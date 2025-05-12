function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -9223372036854775808;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const v19 = {
        h: a7,
        b: a8,
        e: a7,
        o(a10, a11, a12, a13) {
            function f14(a15, a16) {
                a10[a16];
                return F0;
            }
            f14(a8, v5);
            return a13;
        },
        d: F0,
    };
    return v19;
}
f6(f6, v3);
f6(v4, f6(v3, v4));
class C23 {
    [v5] = v3;
    valueOf(a25, a26, a27) {
        function f28(a29) {
            return a29;
        }
        class C30 extends f28 {
            f = F0;
        }
        return f6;
    }
    static c;
    static [v3] = v4;
}
new C23();
new C23();
new C23();
for (let i35 = (() => {
        function f() {
        }
        return f;
    })();
    !i35;
    ) {
    this.x = 1;
    this[0].getThis();
}
for (let i44 = 0; i44 < 1000000; i44++) {
}
