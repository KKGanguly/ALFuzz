new Uint8Array(2473);
const v5 = new Int8Array(2088);
new Int32Array(502);
const v9 = [8,1371246208,10816,1885780277,-30739,-65091,128];
[-268435456,-4294967295,268435440,1052745433,7,9007199254740991];
[31144,1000,-65537,-2147483648,-42898,9];
const v13 = Math.imul;
var imul_func = v13;
function imul_polyfill(a16, a17) {
    const v19 = a16 >>> 16;
    var ah = v19 & 65535;
    var al = a16 & 65535;
    /xyz{93}/msyiv;
    const v27 = /[\d-z]/sdg;
    /N/idg;
    let v29;
    try { v29 = v27.exec(v13); } catch (e) {}
    const t17 = {};
    t17.d = v27;
    const v31 = {};
    v31.d = v27;
    v31.f = v29;
    const v32 = {};
    v32.d = v27;
    v32.f = v29;
    v32.a = al;
    const v33 = {};
    v33.d = v27;
    v33.f = v29;
    v33.a = v19;
    const v37 = (a17 >>> 16) & 65535;
    var bl = a17 & 65535;
    return ((al * bl) + ((((ah * bl) + (al * v37)) << 16) >>> 0)) | 0;
}
function TestMathImul(a53, a54, a55) {
    function imul_meth_closure(a57, a58) {
        return Math.imul(a57, a58);
    }
    function imul_func_closure(a61, a62) {
        return imul_func(a61, a62);
    }
    imul_polyfill(a54, a55);
    Math.imul(a54, a55);
    imul_meth_closure(a54, a55);
    imul_meth_closure(a54, a55);
    imul_func_closure(a54, a55);
    imul_func_closure(a54, a55);
    imul_func_closure(a54, a55);
}
function F77(a79, a80) {
    if (!new.target) { throw 'must be called with new'; }
    this[6] = v5;
    gc({ execution: "sync" });
}
new F77(v5, v9);
TestMathImul(4, -2, -2);
TestMathImul(-5, 4294967295, 5);
TestMathImul(-10, 4294967294, 5);
TestMathImul(0, 7, false);
TestMathImul(7, true, 7);
TestMathImul(1, true, true);
TestMathImul(0, true, false);
TestMathImul(0, 7, undefined);
-0;
TestMathImul(0, 7, -0);
TestMathImul(0, 7, 0.1);
TestMathImul(0, 7, 0.9);
TestMathImul(7, 7, 1.1);
TestMathImul(7, 7, 1.9);
TestMathImul(0, 7, "str");
const v173 = {};
const v175 = {};
[];
var two_30 = 1 << 30;
-two_30;
-two_30;
TestMathImul(two_30, 7, -two_30);
var two_31 = 2 * two_30;
-two_31;
TestMathImul(-two_31, 7, two_31);
-two_31;
TestMathImul(0, -two_31, -two_31);
two_31 - 7;
var two_16 = 1 << 16;
two_16 - 1;
const v208 = -two_16;
const v210 = two_16 - 1;
const v211 = {};
const v212 = {};
const v213 = {};
const v214 = {};
TestMathImul(v208, two_16, v210);
TestMathImul((-2 * two_16) + 1, two_16 - 1, two_16 - 1);
