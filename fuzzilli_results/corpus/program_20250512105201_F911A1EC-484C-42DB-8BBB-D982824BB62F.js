let v0 = 58651n;
class C3 {
    static [v0];
    static #d = v0;
    [v0] = v0;
    n(a5, a6) {
        try {
            this.#d = 1803397972n;
        } catch(e7) {
        }
        return v0;
    }
    b = v0;
}
const v8 = new C3();
new C3();
const v10 = new C3();
function f11(a12, a13, a14) {
    const v48 = {
        e: v0,
        m(a16, a17) {
            [559709067,1000,1073741824];
            let v19 = [-27272,-1664235362,9400,-10456,629049406,-170997590,4,10000];
            let v20 = [-536870912,-12];
            function f21() {
                return f21;
            }
            function f22() {
                return f21;
            }
            function f23() {
                return f23;
            }
            function f24() {
            }
            function f25() {
                const v28 = new Int32Array(4);
                for (let v29 = 0; v29 < 5; v29++) {
                    v28[v29];
                }
                return f24;
            }
            function f31() {
                const v34 = Array(4);
                for (let v35 = 0; v35 < 5; v35++) {
                    v34[v35];
                }
                return v34;
            }
            const v37 = [f21,f22,f23,f24,f25,f31];
            for (let i39 = 0; i39 < v37.length; i39++) {
                const t30 = v37[i39];
                t30();
            }
            [v19,v20,v0] = v20;
            super.c = v8;
            v8.b;
            return a17;
        },
        a: a14,
    };
    return v48;
}
const v49 = f11(257n, 1803397972n, v10);
f11(257n, v49, v49);
f11(1803397972n, v49, C3);
function Test() {
    var left = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    var right = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
    for (let i58 = 0; i58 < 100000; i58++) {
        var cons = left + right;
        var substring = cons.substring(20, 80);
        var index = substring.indexOf("Y");
    }
}
Test();
