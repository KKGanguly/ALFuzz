function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 10;
}
const v3 = new F0();
new F0();
new F0();
new Int16Array(234);
new Float32Array(14);
new Int16Array(0);
var imul_func = Math.imul;
function imul_polyfill(a19, a20) {
    var ah = (a19 >>> 16) & 65535;
    var al = a19 & 65535;
    const v32 = (a20 >>> 16) & 65535;
    var bl = a20 & 65535;
    return ((al * bl) + ((((ah * bl) + (al * v32)) << 16) >>> 0)) | 0;
}
function TestMathImul(a48, a49, a50) {
    function imul_meth_closure(a52, a53) {
        return Math.imul(a52, a53);
    }
    function imul_func_closure(a56, a57) {
        return imul_func(a56, a57);
    }
    imul_polyfill(a49, a50);
    Math.imul(a49, a50);
    imul_func(a49, a50);
    imul_meth_closure(a49, a50);
    imul_meth_closure(a49, a50);
    imul_func_closure(a49, a50);
    new F0();
    new F0();
    const v68 = new Map();
    for (let v69 = 0; v69 < 32; v69++) {
        v68["p" + v69] = v69;
    }
    imul_func_closure(a49, a50);
    imul_func_closure(a49, a50);
}
TestMathImul(8, 2, 4);
TestMathImul(-8, -1, 8);
TestMathImul(4, -2, -2);
TestMathImul(-5, 4294967295, 5);
TestMathImul(-10, 4294967294, 5);
TestMathImul(0, 7, false);
const v109 = TestMathImul(0, false, false);
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
const t62 = {};
t62.b = v3;
const v176 = {};
v176.b = v3;
v176.e = 7;
const v177 = {};
v177.b = v3;
v177.e = 7;
v177.c = v109;
const v178 = {};
v178.b = v3;
v178.e = 7;
v178.c = 1.1;
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
