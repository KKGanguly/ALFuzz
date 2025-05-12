function f1() {
    return f1;
}
f1.prototype = 255;
var y = 302663787453389 / 562949953421312;
const v7 = Math.tan(y);
Math.log();
const v10 = new Float64Array(255);
Symbol.species;
const v16 = [,,];
v16[1] = 0;
const t11 = v16.__proto__;
t11[0] = 1;
const v20 = new Uint8ClampedArray(9);
const v25 = new Uint8ClampedArray(4);
v25[0] = 255;
v25[0];
new BigInt64Array(3);
Array.__proto__ = null;
([Array]).slice();
[9];
[v10,9,255];
const v35 = [9,v20,Float64Array];
class C36 {
    static {
        try {
            new BigInt64Array(v35);
        } catch(e39) {
        }
        super.h = Float64Array;
        var imul_func = Math.imul;
        function imul_polyfill(a43, a44) {
            var ah = (a43 >>> 16) & 65535;
            var al = a43 & 65535;
            const v56 = (a44 >>> 16) & 65535;
            var bl = a44 & 65535;
            return (bl + ((((ah * bl) + (al * v56)) << 16) >>> 0)) | 0;
        }
        function TestMathImul(a71, a72, a73) {
            function imul_meth_closure(a75, a76) {
                return Math.imul(a75, a76);
            }
            function imul_func_closure(a79, a80) {
                return imul_func(a79, a80);
            }
            imul_polyfill(a72, a73);
            Math.imul(a72, a73);
            imul_func(a72, a73);
            imul_meth_closure(a72, a73);
            imul_func_closure(a72, a73);
            imul_func_closure(a72, a73);
        }
        TestMathImul(v7, -1, 8);
        TestMathImul(-5, 4294967295, 5);
        TestMathImul(7, true, 7);
        TestMathImul(302663787453389, 7);
        TestMathImul(1, true, true);
        TestMathImul(0, true, false);
        TestMathImul(0, undefined, 7);
    }
    static o(a127, a128) {
    }
}
function f129() {
    for (let v130 = 0; v130 < 5; v130++) {
    }
}
const v131 = {};
