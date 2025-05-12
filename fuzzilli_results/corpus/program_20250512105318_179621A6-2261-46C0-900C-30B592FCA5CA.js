const v1 = new Set();
const v6 = -2n * -2n;
v6 >> v6;
-4096n ^ -4096n;
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    a13 % a13;
    const v18 = a14--;
    v18 - v18;
    const v20 = this?.__lookupGetter__;
    v20.length;
    let v22;
    try { v22 = new v20(this); } catch (e) {}
    v22 ?? v22;
    try { new v20(v1); } catch (e) {}
    !(a14 < a14);
    this.d = a16;
    this.b = -4096n;
}
let v27;
try { v27 = new F11(127, -1, v1, -2n); } catch (e) {}
v27.d = v27;
var imul_func = Math.imul;
function imul_polyfill(a32, a33) {
    var ah = (a32 >>> 16) & 65535;
    var al = a32 & 65535;
    const v45 = (a33 >>> 16) & 65535;
    var bl = a33 & 65535;
    return ((al * bl) + ((((ah * bl) + (al * v45)) << 16) >>> 0)) | 0;
}
function TestMathImul(a61, a62, a63) {
    function imul_meth_closure(a65, a66) {
        return Math.imul(a65, a66);
    }
    function imul_func_closure(a69, a70) {
        return imul_func(a69, a70);
    }
    imul_polyfill(a62, a63);
    Math.imul(a62, a63);
    imul_func(a62, a63);
    imul_meth_closure(a62, a63);
    imul_meth_closure(a62, a63);
    imul_func_closure(a62, a63);
    imul_func_closure(a62, a63);
    imul_func_closure(a62, a63);
}
TestMathImul(8, 2, 4);
TestMathImul(-8, -1, 8);
TestMathImul(4, -2, -2);
TestMathImul(-5, 4294967295, 5);
TestMathImul(-10, 4294967294, 5);
TestMathImul(0, 7, false);
TestMathImul(0, false, false);
TestMathImul(7, true, 7);
TestMathImul(7, 7);
TestMathImul(1, true, true);
TestMathImul(0, false, true);
TestMathImul(0, true, false);
TestMathImul(0, undefined, 7);
TestMathImul(0, 7, undefined);
TestMathImul(0, undefined, undefined);
TestMathImul(0, -0, 7);
TestMathImul(0, 7, -0);
TestMathImul(0, 0.1, 7);
TestMathImul(0, 7, 0.1);
TestMathImul(0, 0.9, 7);
TestMathImul(0, 7, 0.9);
TestMathImul(7, 1.1, 7);
TestMathImul(7, 7, 1.1);
TestMathImul(7, 1.9, 7);
TestMathImul(7, 7, 1.9);
TestMathImul(0, "str", 7);
TestMathImul(0, 7, "str");
TestMathImul(0, {}, 7);
TestMathImul(0, 7, {});
TestMathImul(0, [], 7);
TestMathImul(0, 7, []);
var two_30 = 1 << 30;
TestMathImul(-two_30, two_30, 7);
TestMathImul(0, two_30, two_30);
TestMathImul(two_30, -two_30, 7);
TestMathImul(two_30, 7, -two_30);
TestMathImul(0, -two_30, -two_30);
var two_31 = 2 * two_30;
TestMathImul(-two_31, two_31, 7);
TestMathImul(-two_31, 7, two_31);
TestMathImul(0, two_31, two_31);
TestMathImul(-two_31, -two_31, 7);
TestMathImul(-two_31, 7, -two_31);
TestMathImul(0, -two_31, -two_31);
var max_val = two_31 - 1;
two_31 - 7;
TestMathImul(two_31 - 7, 7, max_val);
TestMathImul(1, max_val, max_val);
var two_16 = 1 << 16;
TestMathImul(0, two_16, two_16);
TestMathImul(-two_16, two_16 - 1, two_16);
TestMathImul(-two_16, two_16, two_16 - 1);
TestMathImul((-2 * two_16) + 1, two_16 - 1, two_16 - 1);
function f293(a294, a295, a296, a297) {
    a294 ^ a294;
    a295 & a295;
    a296 ^ a296;
    try { gc.toString(); } catch (e) {}
    gc();
    return gc;
}
f293(-4096n, 536870887n, 127, -1);
new F11(127, -4096n, 536870887n, 912914328);
const v306 = new F11(-4096n, -2n, F11, 912914328);
v306.b = v306;
v306.length = v306;
const v307 = new F11(-2n, -4096n, -1, -1);
v307.d = v307;
0n & 0n;
let v313 = 1;
v313 >> v313;
const v315 = v313--;
v315 >> v315;
Math.exp(v313);
const v319 = Math.log(2);
v319 - v319;
let v322 = Math.log10(Math.E);
v322++;
let v324 = v322 >>> v322;
v324++;
let v327 = Math.log2(Math.E);
v327++;
let v329 = -v327;
v329++;
v329 * v329;
