class C3 {
    get b() {
        ("LR")[4035];
        const t3 = {};
        t3.b = "LR";
        const v7 = {};
        v7.b = "LR";
        v7.e = this;
        const v8 = {};
        v8.b = "LR";
        v8.e = this;
        v8.h = this;
        const v9 = {};
        v9.b = "LR";
        v9.e = this;
        v9.c = this;
        return v8;
    }
}
new C3();
new C3();
new C3();
[711915850,-9223372036854775808,-183973381,-2];
[-50213,-536870912,4,1188260964,-1852543447,141779671,268435439];
[512,6];
[255,9,2,4294967296,536870887,1,2147483649];
[4294967295,55377,536870888,15,1748769254];
[268435456,-2,-56676,-9,7,386613498,64,15,151639146,256];
var imul_func = Math.imul;
function imul_polyfill(a23, a24) {
    var ah = (a23 >>> 16) & 65535;
    var al = a23 & 65535;
    const v36 = (a24 >>> 16) & 65535;
    var bl = a24 & 65535;
    return ((al * bl) + ((((ah * bl) + (al * v36)) << 16) >>> 0)) | 0;
}
function TestMathImul(a52, a53, a54) {
    function imul_meth_closure(a56, a57) {
        const v58 = Math.imul(a56, a57);
        const v61 = [0,1];
        function f62(a63) {
            const v65 = { length: 0 };
            Object.defineProperty(v65, "length", { writable: false });
            return v65;
        }
        const v72 = Symbol.species;
        v61.constructor = { [v72]: f62 };
        Array.prototype.concat;
        return v58;
    }
    function imul_func_closure(a79, a80) {
    }
    imul_meth_closure(a53, a54);
    imul_meth_closure(a53, a54);
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
TestMathImul(7, 7, 1.9);
const v171 = {};
const v172 = {};
var two_30 = 1 << 30;
TestMathImul(-two_30, two_30, 7);
