function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 1073741824;
}
new F0();
var imul_func = Math.imul;
function imul_polyfill(a8, a9) {
    var ah = (a8 >>> 16) & 65535;
    var al = a8 & 65535;
    const v21 = (a9 >>> 16) & 65535;
    var bl = a9 & 65535;
    return ((al * bl) + ((((ah * bl) + (al * v21)) << 16) >>> 0)) | 0;
}
function TestMathImul(a37, a38, a39) {
    function imul_meth_closure(a41, a42) {
        return Math.imul(a41, a42);
    }
    function imul_func_closure(a45, a46) {
        return imul_func(a45, a46);
    }
    imul_polyfill(a38, a39);
    Math.imul(a38, a39);
    imul_func(a38, a39);
    imul_meth_closure(a38, a39);
    imul_meth_closure(a38, a39);
    imul_func_closure(a38, a39);
    imul_func_closure(a38, a39);
    imul_func_closure(a38, a39);
}
TestMathImul(8, 2, 4);
TestMathImul(-5, 4294967295, 5);
TestMathImul(0, 7, false);
TestMathImul(0, false, false);
TestMathImul(7, true, 7);
TestMathImul(0, true, false);
TestMathImul(0, undefined, 7);
TestMathImul(0, 7, undefined);
TestMathImul(7, 1.1, 7);
TestMathImul(7, 1.9, 7);
TestMathImul(0, 7, "str");
TestMathImul(0, {}, 7);
var two_30 = 1 << 30;
TestMathImul(-two_30, two_30, 7);
TestMathImul(0, two_30, two_30);
TestMathImul(two_30, 7, -two_30);
var two_31 = 2 * two_30;
TestMathImul(-two_31, 7, two_31);
TestMathImul(0, two_31, two_31);
new F0();
new F0();
new WeakMap();
let v129 = 10;
v129++;
new Int8Array(v129);
new Uint8Array(1);
new Uint16Array(7);
try { Math.floor(1); } catch (e) {}
var imul_func = Math.imul;
try { imul_func(imul_func, 1); } catch (e) {}
function imul_polyfill(a145, a146) {
    a145 >>> a145;
    var ah = (a145 >>> 16) & 65535;
    65535 - 65535;
    const v155 = a145 & 65535;
    v155 << v155;
    var al = 7;
    -al;
    const v160 = a146 >>> 16;
    v160 | v160;
    const v163 = v160 & 65535;
    var bl = a146 & 65535;
    const v167 = al * bl;
    let v168 = ah * bl;
    v168++;
    let v171 = v168 + (al * v163);
    v171--;
    const v174 = v171 << 16;
    v174 >>> v174;
    return (v167 + (v174 >>> 0)) | 0;
}
function TestMathImul(a182, a183, a184) {
    function selfOf(a186) {
        a186.self_;
    }
    function F() {
        this.x = 42;
    }
    var result_y;
    const v196 = new Object();
    var proto = v196;
    function f199(a200) {
        result_y = a200;
    }
    const v201 = new F();
    var f = v201;
    f.y = undefined;
    function imul_meth_closure(a205, a206) {
        const v207 = Math.imul(a205, a206);
        v207 - v207;
    }
    function imul_func_closure(a210, a211) {
        a210 - a210;
        ~a211;
        return imul_func(a210, a211);
    }
    imul_polyfill(a183, a184);
    Math.imul(a183, a184);
    imul_meth_closure(a183, a184);
    imul_meth_closure(a183, a184);
    let v221 = imul_func_closure(a183, a184);
    v221--;
    const v223 = imul_func_closure(a183, a184);
    v223 | v223;
    imul_func_closure(a183, a184);
}
TestMathImul(8, 2, 4);
TestMathImul(-8, -1, 8);
TestMathImul(4, -2, -2);
TestMathImul(-5, 4294967295, 5);
TestMathImul(-10, 4294967294, 5);
false || false;
TestMathImul(0, 7, false);
false && false;
TestMathImul(0, false, false);
TestMathImul(7, true, 7);
const v271 = TestMathImul(7, 7);
v271 ?? v271;
TestMathImul(1, true, true);
const v278 = 0 & 0;
TestMathImul(0, false, true);
TestMathImul(0, true, false);
0 != 0;
TestMathImul(0, undefined, 7);
undefined ?? undefined;
TestMathImul(0, 0.9, 7);
function f306() {
    const v308 = v278(this);
    const v309 = { fffffff: v308 };
}
-7;
TestMathImul(7, 1.9, 7);
TestMathImul(0, "str", 7);
7 - 7;
const v320 = {};
const v321 = {};
[];
-1;
var two_30 = 1 << 30;
TestMathImul(0, two_30, two_30);
TestMathImul(two_30, -two_30, 7);
-two_30;
var two_31 = 2 * two_30;
TestMathImul(-two_31, two_31, 7);
TestMathImul(0, two_31, two_31);
TestMathImul(-two_31, -two_31, 7);
TestMathImul(-two_31, 7, -two_31);
-two_31;
var max_val = two_31 - 1;
TestMathImul(two_31 - 7, 7, max_val);
const v360 = TestMathImul(1, max_val, max_val);
v360 ?? v360;
const v364 = 1 << 16;
v364 % v364;
var two_16 = v364;
const v368 = TestMathImul(0, two_16, 30);
v368 ?? v368;
const v371 = two_16 - 1;
v371 >>> v371;
