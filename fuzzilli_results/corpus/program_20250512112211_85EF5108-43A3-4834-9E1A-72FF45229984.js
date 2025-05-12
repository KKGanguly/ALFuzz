const v0 = /ea\nb\bc/myuidg;
/([\cA])/mud;
const v2 = /Ka|b+/myuidg;
function f3(a4) {
    const v9 = {
        a: a4,
        __proto__: v2,
        251: a4,
        1: v2,
        9: a4,
        h: v0,
        valueOf(a6, a7) {
            a7.multiline >>>= a6;
            super.g = a4;
            a4 ? a4 : a4;
        },
    };
}
f3(v2);
f3(v0);
%OptimizeFunctionOnNextCall(f3);
class C12 extends f3 {
    get g() {
        let v15 = 2.220446049250313e-16;
        Math.cosh();
        v15 * v0;
        ++v15;
        return v15;
    }
}
new C12();
function f20(a21) {
    let v22 = 0;
    v0[256] &&= v22;
    gc({ execution: "sync", type: "minor" });
    for (let v29 = 0; v29 < 1000; v29++) {
        v22 += a21?.[a21];
        if (v29 > 6) {
            v29 - 4;
            v22 -= a21;
        }
        v29++;
    }
}
f20();
f20(Int32Array);
