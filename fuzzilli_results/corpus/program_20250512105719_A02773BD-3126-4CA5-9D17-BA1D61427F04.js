function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 330758429;
}
const v3 = new F0();
new F0();
const v5 = new F0();
const v9 = 320255973501901 / 562949953421312;
var y = 302663787453389 / 562949953421312;
Math.sin(v9) != y;
Math.cos(v9);
Math.tan(y);
Math.log(v9) != Math.log();
Math.asin(v9);
Math.acos(y);
Math != Math.atan(y);
Math.exp(v9);
const v28 = new BigUint64Array(4096);
new Uint16Array(0);
let v34 = new Uint16Array(8);
function f35(a36, a37) {
    const v44 = {
        [-1]: F0,
        ...a36,
        268435441: a37,
        set e(a39) {
            v3.g = v5;
            ({"g":v34,} = a39);
            const v40 = %WasmArray();
            try {
                v5.stringify("L8KMx", "L8KMx", a39, a36);
            } catch(e43) {
            }
        },
        h: v3,
        b: a37,
    };
    return v44;
}
f35(4096, 0);
f35(v28, Uint16Array);
f35(0, 8);
function Test() {
    var left = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    var right = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
    for (let i54 = 0; i54 < 100000; i54++) {
        var cons = left + right;
        var substring = cons.substring(20, 80);
        var index = substring.indexOf("Y");
    }
}
Test();
