[0.3997399744955398,-0.0,0.0,0.05321503571797037,1.0,2.2250738585072014e-308,143.4191806897138,9.69896290708029,1.5683436716991369e+308,1.0];
[1.0,-3.0];
[-1000000000000.0];
new Float64Array(7);
new Uint8ClampedArray(3);
const v11 = new BigInt64Array(64);
v11["join"]("join");
const v14 = /Ac[\ca]/msuig;
function f15() {
    return 64;
}
Object.defineProperty(v14, "length", { enumerable: true, get: f15 });
/K*/syiv;
/2Ka+/myudg;
const t12 = "join";
t12[-1] = v11;
global = 1;
function f23(a24) {
    return global;
}
const v25 = f23();
function f27() {
    return v25;
}
var imul_func = Math.imul;
function imul_polyfill(a33, a34) {
    var ah = (a33 >>> 16) & 65535;
    var al = a33 & 65535;
    const v46 = (a34 >>> 16) & 65535;
    var bl = a34 & 65535;
    return ((al * bl) + ((((ah * bl) + (al * v46)) << 16) >>> 0)) | 0;
}
function TestMathImul(a62, a63, a64) {
    function imul_meth_closure(a66, a67) {
        return Math.imul(a66, a67);
    }
    function imul_func_closure(a70, a71) {
        return a71;
    }
    imul_polyfill(a63, a64);
    Math.imul(a63, a64);
    imul_func(a63, a64);
    imul_meth_closure(a63, a64);
    imul_meth_closure(a63, a64);
    imul_func_closure(a63, a64);
    imul_func_closure(a63, a64);
    imul_func_closure(a63, a64);
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
TestMathImul(two_30, -two_30, 7);
TestMathImul(two_30, 7, two_30);
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
f23(this.__defineGetter__("global", f27));
