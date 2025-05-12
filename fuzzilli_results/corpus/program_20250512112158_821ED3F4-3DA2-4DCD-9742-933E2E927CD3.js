function f0(a1) {
    return f0;
}
class C2 extends f0 {
}
function f3() {
    function f5(a6) {
        f0(this);
        return this;
    }
    this.onmessage = f5;
    for (let v8 = 0; v8 < 5; v8++) {
        C2["p" + v8] = v8;
    }
    const v13 = [5,,];
    function f14() {
        v13.length = 246479940;
        const v19 = ["invalid",23];
        try {
            const v20 = v19[2];
            Error.prototype.toString.call(v20);
        } catch(e25) {
        }
        return 2;
    }
    const v26 = { valueOf: f14 };
    function f27() {
        var left = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        var right = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
        return left + right;
    }
    const v33 = { get: f27 };
    return v13;
}
new Worker(f3, { type: "function" });
