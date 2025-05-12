function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 268435456;
    this.f = 268435456;
    this.c = 268435456;
}
const v3 = new F0();
new F0();
const v5 = new F0();
new Float32Array(6);
new Uint8ClampedArray(14);
new Int16Array(0);
function F15(a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a18;
    this.a = a17;
    function f19(a20, a21) {
        a21();
        a21();
        return a21;
    }
    function f24() {
        var result;
        let v27 = 0;
        const v29 = new Set();
        v29[Symbol.iterator]();
        for (let i34 = 0;
            (() => {
                const v36 = i34 < 90;
                Array.prototype;
                var o2 = Array;
                o2.z = v27;
                const v41 = [,,];
                function f43(a44, a45, a46) {
                    v41.__proto__;
                    return f43;
                }
                return v36;
            })();
            i34++) {
            v27 += i34;
        }
    }
    f19(4005, f24);
    function f54() {
        for (let v56 = 0; v56 < 250; v56++) {
            v56++;
        }
    }
}
const v59 = new F15(14, v5);
new F15(6, v3);
new F15(14, v59);
function foo(a63) {
    var sum = 0;
    for (let i67 = 0; i67 < 10; i67++) {
        if (i67 > 6) {
            i67 - 4;
            sum -= a63;
        }
    }
    for (let i79 = (() => {
            function f() {
            }
            return f;
        })();
        !i79;
        ) {
    }
}
const v85 = new Int32Array(10);
foo(v85);
