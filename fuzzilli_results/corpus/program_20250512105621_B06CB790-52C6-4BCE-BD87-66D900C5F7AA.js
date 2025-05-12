class C3 {
    set a(a5) {
        function F6(a8) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = -1.4250158363291627e+308;
        }
        const v9 = new F6("o");
        const v10 = new F6(v9);
        new F6(v10);
    }
    static 2;
    [-1.4250158363291627e+308] = "o";
}
new C3();
var imul_func = Math.imul;
function imul_polyfill(a17, a18) {
    var ah = (a17 >>> 16) & 65535;
    var al = a17 & 65535;
    const v28 = a18 >>> 16;
    new Set();
    [,-1000000000.0];
    const v34 = v28 & 65535;
    var bl = a18 & 65535;
    return ((al * bl) + ((((ah * bl) + (al * v34)) << 16) >>> 0)) | 0;
}
function TestMathImul(a50, a51, a52) {
    function imul_meth_closure(a54, a55) {
        return Math.imul(a54, a55);
    }
    function imul_func_closure(a58, a59) {
        return imul_func(a58, a59);
    }
    imul_polyfill(a51, a52);
    Math.imul(a51, a52);
    imul_func(a51, a52);
    imul_meth_closure(a51, a52);
    imul_func_closure(a51, a52);
    imul_func_closure(a51, a52);
    imul_func_closure(a51, a52);
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
