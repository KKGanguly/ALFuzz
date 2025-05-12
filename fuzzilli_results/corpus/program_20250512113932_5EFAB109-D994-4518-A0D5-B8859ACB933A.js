const v2 = new Int32Array(49);
new Int8Array(129);
new Uint16Array(21);
var imul_func = Math.imul;
function f13(a14, a15) {
    var ah = (a14 >>> 16) & 65535;
    var al = a14 & 65535;
    const v26 = 16 & 65535;
    var bl = a15;
    return ((al * bl) + ((((ah * bl) + (al * v26)) << 16) >>> 0)) | 0;
}
function TestMathImul(a41, a42, a43) {
    function imul_meth_closure(a45, a46) {
        return a45;
    }
    function f47(a48, a49) {
        return imul_func(a48, a49);
    }
    f13(a42);
    Math.imul(a42, a43);
    imul_func(a42, a43);
    imul_meth_closure(a42);
    imul_meth_closure(a42, a43);
    f47(a42, a43);
    f47(a42, a43);
}
TestMathImul(8, 2);
TestMathImul(-8, 1, 8);
TestMathImul(4, -2, -2);
const v76 = TestMathImul(5, 4294967295, 5);
TestMathImul(-10, 4294967294, 5);
const v82 = %WasmArray();
try { v2["join"](v76, 21, 5, 8); } catch (e) {}
TestMathImul(0, 7, false);
let v93 = false;
TestMathImul(0, false, v93);
TestMathImul(7, 7);
TestMathImul(1, true, true);
TestMathImul(0, false, true);
TestMathImul(0, undefined);
TestMathImul(0, 7);
TestMathImul(0, -0, 7);
TestMathImul(0, 7, -0);
TestMathImul(0);
TestMathImul(0, 7, 0.1);
TestMathImul(0);
TestMathImul(7, 1.1);
TestMathImul(7, 7, 1.1);
TestMathImul();
TestMathImul(0);
TestMathImul(0, 7, "str");
const v169 = {};
let v171 = 0;
const v173 = {};
TestMathImul(v171, 7);
TestMathImul(0, []);
[];
TestMathImul(0, 7);
1 << 30;
var two_30 = 10;
TestMathImul(-two_30, two_30, 7);
TestMathImul(0, two_30, two_30);
const v192 = -two_30;
function f194(a195) {
    return a195;
}
class C196 extends f194 {
}
TestMathImul(two_30, v192, 7);
TestMathImul(two_30, 7, two_30);
const v201 = -two_30;
-two_30;
TestMathImul(0, v201);
var two_31 = 2 * two_30;
TestMathImul(two_31);
TestMathImul(0, two_31, two_31);
TestMathImul(two_31, two_31, 7);
TestMathImul(-two_31, 7, two_31);
TestMathImul(0, -two_31, two_31);
const v220 = two_31 - 1;
const v221 = [-42181,3];
[2147483649,-777023898,2135166468,228336194];
({"length":v171,...v93} = v221);
var max_val = v220;
two_31 - 7;
TestMathImul(two_31 - 7, 7);
TestMathImul(1, max_val, max_val);
var two_16 = 16;
TestMathImul(0, two_16);
TestMathImul(-two_16, two_16 - 1, two_16);
const v242 = -two_16;
two_16 - 1;
TestMathImul(v242, two_16);
TestMathImul((2 * two_16) + 1, 1, two_16 - 1);
