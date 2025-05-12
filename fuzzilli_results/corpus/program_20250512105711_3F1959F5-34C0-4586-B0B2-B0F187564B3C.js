[5.0];
const v1 = [1.0,0.8608187016642053,296.6101554449947,1.3440072815994757,-2.2250738585072014e-308,1.4101904266746352,2.220446049250313e-16,210171.34039876005,1000000000.0];
[2.0,-0.0,1000000000.0,0.0,-1.7976931348623157e+308,-997.6213902915738,-2.632979883494851e+307,2.2390659785829195e+307,3.0,1e-15];
-13n >= -13n;
let v5 = 6;
v5++;
new BigInt64Array(2);
const v12 = new BigInt64Array(8);
const v13 = v12?.constructor;
const v16 = [,0.1];
const v19 = {
    valueOf() {
        v16.length = 0;
        return v16;
    },
};
try { new v13(v1, -13n, -13n); } catch (e) {}
let v23;
try {
const t0 = 8;
v23 = t0();
} catch (e) {}
var old_dispatch_counters = v23;
typeof old_dispatch_counters;
this.x = 1;
new Float32Array(2531);
for (let i31 = 0; i31 < 1000000; i31++) {
}
const v37 = new Uint8Array();
v37.BYTES_PER_ELEMENT;
-2;
Boolean.prototype;
var imul_func = Math.imul;
function imul_polyfill(a47, a48) {
    var ah = (a47 >>> 16) & 65535;
    var al = a47 & 65535;
    const v60 = (a48 >>> 16) & 65535;
    var bl = a48 & 65535;
    return ((al * bl) + ((((ah * bl) + (al * v60)) << 16) >>> 0)) | 0;
}
function TestMathImul(a76, a77, a78) {
    function imul_meth_closure(a80, a81) {
        return Math.imul(a80, a81);
    }
    function imul_func_closure(a84, a85) {
        return imul_func(a84, a85);
    }
    imul_polyfill(a77, a78);
    Math.imul(a77, a78);
    imul_func(a77, a78);
    imul_meth_closure(a77, a78);
    imul_meth_closure(a77, a78);
    imul_func_closure(a77, a78);
    imul_func_closure(a77, a78);
    imul_func_closure(a77, a78);
}
TestMathImul(-5, 4294967295, 5);
TestMathImul(-10, 4294967294, 5);
TestMathImul(0, false, false);
TestMathImul(1, true, true);
TestMathImul(0, undefined, 7);
TestMathImul(0, 7, undefined);
TestMathImul(0, 7, -0);
TestMathImul(0, 0.1, 7);
TestMathImul(0, 0.9, 7);
TestMathImul(7, 1.1, 7);
TestMathImul(7, 7, 1.1);
TestMathImul(0, "str", 7);
TestMathImul(1, 7, "str");
TestMathImul(0, {}, 7);
TestMathImul(0, 7, {});
TestMathImul(0, [], 7);
TestMathImul(0, 7, []);
var two_30 = 1 << 30;
TestMathImul(-two_30, two_30, 7);
TestMathImul(0, two_30, two_30);
TestMathImul(two_30, two_30, 7);
TestMathImul(0, two_30, -two_30);
var two_31 = 2 * two_30;
TestMathImul(-two_31, two_31, 7);
TestMathImul(0, two_31, two_31);
two_31 - 7;
for (let v190 = 0; v190 < 5; v190++) {
    let v191 = ("// Copyright 2014 the V8 project authors. All rights reserved.").length;
    v191++;
    const v193 = v37[v190];
    v193 ?? v193;
    const v196 = Symbol.species;
    const v197 = { [v196]: Boolean };
}
