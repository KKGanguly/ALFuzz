[5.0];
const v1 = [1.0,0.8608187016642053,296.6101554449947,1.3440072815994757,-2.2250738585072014e-308,1.4101904266746352,2.220446049250313e-16,210171.34039876005,1000000000.0];
[2.0,-0.0,1000000000.0,0.0,-1.7976931348623157e+308,-997.6213902915738,-2.632979883494851e+307,2.2390659785829195e+307,3.0,1e-15];
const v6 = [0,1];
function f7(a8) {
    const v10 = { length: 0 };
    Object.defineProperty(v10, "length", { writable: false });
    return v10;
}
const v17 = Symbol.species;
v6.constructor = { [v17]: f7 };
const v22 = Array.prototype.concat;
try { v22.call(v6); } catch (e) {}
-13n >= -13n;
let v29 = 6;
v29++;
new BigInt64Array(2);
const v36 = new BigInt64Array(8);
const v37 = v36?.constructor;
const v40 = [,0.1];
const v43 = {
    valueOf() {
        v40.length = 0;
        return v40;
    },
};
try { new v37(v1, -13n, -13n); } catch (e) {}
let v47;
try {
const t0 = 8;
v47 = t0();
} catch (e) {}
var old_dispatch_counters = v47;
typeof old_dispatch_counters;
this.x = 1;
new Float32Array(2531);
for (let i55 = 0; i55 < 1000000; i55++) {
}
const v61 = new Uint8Array();
v61.BYTES_PER_ELEMENT;
-2;
Boolean.prototype;
var imul_func = Math.imul;
function imul_polyfill(a71, a72) {
    var ah = (a71 >>> 16) & 65535;
    var al = a71 & 65535;
    const v84 = (a72 >>> 16) & 65535;
    var bl = a72 & 65535;
    return ((al * bl) + ((((ah * bl) + (al * v84)) << 16) >>> 0)) | 0;
}
function TestMathImul(a100, a101, a102) {
    function imul_meth_closure(a104, a105) {
        return Math.imul(a104, a105);
    }
    function imul_func_closure(a108, a109) {
        return imul_func(a108, a109);
    }
    imul_polyfill(a101, a102);
    Math.imul(a101, a102);
    imul_func(a101, a102);
    imul_meth_closure(a101, a102);
    imul_meth_closure(a101, a102);
    imul_func_closure(a101, a102);
    imul_func_closure(a101, a102);
    imul_func_closure(a101, a102);
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
TestMathImul(two_30, -two_30, 7);
TestMathImul(0, -two_30, -two_30);
var two_31 = 2 * two_30;
TestMathImul(-two_31, two_31, 7);
TestMathImul(0, two_31, two_31);
two_31 - 7;
for (let v216 = 0; v216 < 5; v216++) {
    let v217 = ("// Copyright 2014 the V8 project authors. All rights reserved.").length;
    v217++;
    const v219 = v61[v216];
    v219 ?? v219;
    const v222 = Symbol.species;
    const v223 = { [v222]: Boolean };
}
