function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 1073741823;
    this.e = 1073741823;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v4,v4,F0,v4];
[v6,v5,v3,v6];
const v9 = [[v5]];
function f10(a11, a12) {
    return a12;
}
Error.prepareStackTrace = f10;
try {
    const v15 = Error(/(invalid regexp)/);
    var imul_func = Math.imul;
    function imul_polyfill(a20, a21) {
        var ah = (a20 >>> 16) & 65535;
        var al = a20 & 65535;
        const v33 = (a21 >>> 16) & 65535;
        var bl = a21 & 65535;
        return ((al * bl) + ((((ah * bl) + (al * v33)) << 16) >>> 0)) | 0;
    }
    function TestMathImul(a49, a50, a51) {
        function imul_meth_closure(a53, a54) {
            return Math.imul(a53, a54);
        }
        function imul_func_closure(a57, a58) {
            return imul_func(a57, a58);
        }
        imul_polyfill(a50, a51);
        Math.imul(a50, a51);
        imul_func(a50, a51);
        imul_meth_closure(a50, a51);
        imul_meth_closure(a50, a51);
        imul_func_closure(a50, a51);
        imul_func_closure(a50, a51);
        imul_func_closure(a50, a51);
    }
    TestMathImul(4, -2, -2);
    TestMathImul(-5, 4294967295, 5);
    TestMathImul(0, 7, false);
    TestMathImul(0, false, false);
    TestMathImul(7, true, 7);
    TestMathImul(1, true, true);
    TestMathImul(0, 7, undefined);
    TestMathImul(0, -0, 7);
    TestMathImul(0, 7, -0);
    TestMathImul(0, 0.9, 7);
    TestMathImul(0, 7, 0.9);
    TestMathImul(7, 1.1, 7);
    TestMathImul(7, 1.9, 7);
    TestMathImul(7, 7, 1.9);
    TestMathImul(0, 7, "str");
    TestMathImul(0, 7, {});
    var two_30 = 1 << 30;
    TestMathImul(-two_30, two_30, 7);
    TestMathImul(two_30, -two_30, 7);
    TestMathImul(0, -two_30, -two_30);
    var two_31 = 2 * two_30;
    TestMathImul(-two_31, two_31, 7);
    TestMathImul(-two_31, -two_31, 7);
    TestMathImul(-two_31, 7, -two_31);
    var max_val = two_31 - 1;
    TestMathImul(1, max_val, max_val);
    var two_16 = 1 << 16;
    TestMathImul(-two_16, two_16 - 1, two_16);
    TestMathImul(-two_16, two_16, two_16 - 1);
    (-2 * two_16) + 1;
    throw v15;
} catch(e187) {
    const v189 = e187.stack[0];
    const v190 = v189.getThis();
    v190.toString(v190, v189);
}
const v192 = [v4,v9,v5];
let v193 = [v192,F0,v6];
const v195 = new Uint8Array();
for (let v197 = 0; v197 < 5; v197++) {
    ("// Copyright 2014 the V8 project authors. All rights reserved.").length;
    v195[v197];
}
new Int16Array(512);
const v205 = v3.a;
const t86 = Error(v193 = v205);
t86[3] = v205;
v5.g = 1384;
new Uint8Array(1384);
new Float64Array(4);
function f211(a212, a213) {
    function f214() {
        const v216 = a213(this);
        return { fffffff: v216 };
    }
    return f214;
}
const v220 = f211(m, selfOf);
function selfOf(a222) {
    return a222.self_;
}
function m() {
    return m;
}
const v226 = {
    a: v192,
    c: v9,
    [v6]: v220,
    [Error]: v9,
    g: Float64Array,
    self_: 3,
};
v220.apply(v226);
const v232 = {
    self_: 3,
    type: "// Copyright 2014 the V8 project authors. All rights reserved.",
    length: 4,
    get: Error,
    valueOf() {
        v6.length = 0;
        return v6;
    },
    uuu: 4,
};
gc({ execution: "sync", type: "major" });
v220.apply(3, selfOf);
