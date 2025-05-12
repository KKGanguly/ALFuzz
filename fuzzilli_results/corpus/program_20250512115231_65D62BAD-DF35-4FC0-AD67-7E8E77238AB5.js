new Float32Array(3);
new Uint32Array(5);
new Float64Array(3258);
undefined ?? undefined;
var imul_func = Math.imul;
function imul_polyfill(a15, a16) {
    a15 >>> a15;
    var ah = (a15 >>> 16) & 65535;
    var al = a15 & 65535;
    const v27 = a16 >>> 16;
    ~v27;
    const v30 = v27 & 65535;
    v30 - v30;
    const v33 = a16 & 65535;
    v33 >= v33;
    var bl = v33;
    const v36 = al * bl;
    const v39 = (ah * bl) + (al * v30);
    v39 === v39;
    let v41 = 16;
    v41--;
    const v43 = v39 << v41;
    let v44 = 0;
    v44--;
    const v46 = v43 >>> v44;
    v46 + v46;
    const v48 = v36 + v46;
    0 + 0;
    return v48 | 0;
}
try { imul_polyfill(imul_polyfill, 5); } catch (e) {}
function TestMathImul(a54, a55, a56) {
    a55--;
    a56 - a56;
    function imul_meth_closure(a60, a61) {
        a60 + a60;
        a61 >>> a61;
        return Math.imul(a60, a61);
    }
    imul_meth_closure.prototype = imul_meth_closure;
    function imul_func_closure(a66, a67) {
        a67 - a67;
        return imul_func(a66, a67);
    }
    imul_func_closure.prototype = imul_func_closure;
    imul_polyfill(a55, a56);
    Math.imul(a55, a56);
    imul_func(a55, a56);
    imul_meth_closure(a55, a56);
    imul_meth_closure(a55, a56);
    imul_func_closure(a55, a56);
    const v76 = imul_func_closure(a55, a56);
    v76 / v76;
    imul_func_closure(a55, a56);
}
4 * 4;
TestMathImul(8, 2, 4);
let v85 = -8;
v85++;
const v88 = -1;
v88 / v88;
TestMathImul(v85, v88, 8);
-2;
let v95 = 2;
v95--;
const v97 = -v95;
v97 / v97;
const v100 = -5;
v100 + v100;
4294967295 - 4294967295;
TestMathImul(v100, 4294967295, 5);
TestMathImul(-10, 4294967294, 5);
TestMathImul(0, 7, false);
TestMathImul(0, false, false);
TestMathImul(7, true, 7);
TestMathImul(7, 7);
true && true;
TestMathImul(1, true, true);
TestMathImul(0, false, true);
TestMathImul(0, true, false);
TestMathImul(0, undefined, 7);
TestMathImul(0, 7, undefined);
function f152() {
}
TestMathImul(0, undefined, undefined);
TestMathImul(0, -0, 7);
TestMathImul(0, 7, -0);
TestMathImul(0, 0.1, 7);
TestMathImul(0, 7, 0.1);
const v187 = TestMathImul(0, 7, 0.9);
v187 ?? v187;
const v207 = {};
const v211 = {};
try {
} catch(e242) {
}
