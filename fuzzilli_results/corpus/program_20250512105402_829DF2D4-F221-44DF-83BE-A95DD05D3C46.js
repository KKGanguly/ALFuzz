const v2 = { type: "string" };
const v5 = new Int32Array(10);
const t2 = "symbol";
t2["-256"] = 11;
new Proxy(v5, { fffffff: "slice", fffffff: "255" });
Math.exp(1);
Math.log(2);
const v25 = Math.E;
Math.log10(v25);
Math.log2(Math.E);
function F29(a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v25;
    function f33() {
        return f33;
    }
    function f34(a35) {
        const v37 = [,,];
        v37[1] = 0;
        v37[2] = 2;
        function f40(a41, a42, a43) {
            const t21 = v37.__proto__;
            t21[0] = 1;
            return f40;
        }
        v37.forEach(f40);
        return a35;
    }
    this.d = a32;
}
const v47 = new F29("-586293259", 11);
const v48 = new F29(v47, 33172);
function f49(a50) {
    const v52 = [,,];
    v52[1] = 0;
    v52[2] = 2;
    function f55(a56, a57, a58) {
        const t37 = v52.__proto__;
        t37[0] = 1;
        return f55;
    }
    v52.forEach(f55);
    return a50;
}
new F29(v48, -815933794);
function Test() {
    Array.__proto__ = null;
    ([Array]).slice();
    var left = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    var right = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
    for (let i73 = 0; i73 < 100000; i73++) {
        var cons = left + right;
        var substring = cons.substring(20, 80);
        var index = substring.indexOf("Y");
    }
    [5,,11];
    function f92() {
    }
}
Test();
