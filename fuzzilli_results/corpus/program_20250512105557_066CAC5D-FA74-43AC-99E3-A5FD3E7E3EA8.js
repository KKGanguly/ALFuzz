function f1(a2, a3) {
    this.x = a2;
    this.y = a3;
    return this;
}
function f7() {
    const v9 = new f1(1);
    const v14 = (v9.x + v9.x) + v9.x;
    const v15 = v9.x;
    v14 + v15;
    return v15;
}
function f17() {
    const v20 = new f1(1, 2);
    v20.x = 4;
    new f1();
    return 4;
}
function f23(a24, a25) {
    a25();
    return a25;
}
f23(22, f17);
class C29 {
    static {
        let v31 = 0;
        for (let i33 = 0;
            (() => {
                class C35 extends f7 {
                    [f7] = i33;
                    static #c = f23;
                }
                new C35();
                new C35();
                return i33 < 10;
            })();
            i33++) {
            v31 += this;
        }
        try {
        const t0 = 268435439;
        t0();
        } catch (e) {}
    }
}
