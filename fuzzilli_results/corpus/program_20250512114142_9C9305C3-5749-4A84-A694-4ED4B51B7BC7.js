class C1 {
}
const v2 = new C1();
function f3(a4, a5) {
    const v7 = {
        ..."WV1j",
        d: a5,
        a: v2,
        b: v2,
        c: "WV1j",
        get g() {
            super["WV1j"] = v2;
        },
        g: a4,
        f: a5,
        e: a5,
    };
}
const v8 = f3(f3, v2);
class C9 extends C1 {
    constructor(a11, a12, a13) {
        super();
        f3(C1, a11);
        %OptimizeFunctionOnNextCall(f3);
        f3(v8, a11);
    }
}
new C9(f3, "WV1j", v2);
