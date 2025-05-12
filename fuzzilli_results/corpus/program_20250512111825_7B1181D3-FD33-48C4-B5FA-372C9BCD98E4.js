class C3 {
    constructor(a5) {
        a5 >>> a5;
        const v7 = [this,this,this,-3.7726598760479947e+307];
        try { v7.unshift(a5); } catch (e) {}
        [v7];
        [a5];
    }
    n(a12) {
        try { a12.padStart(this, -490.00960199547563); } catch (e) {}
        super.c;
        let v17;
        try { v17 = getIgnitionDispatchCounters(); } catch (e) {}
        var old_dispatch_counters = v17;
        try { Object.getOwnPropertyNames(old_dispatch_counters); } catch (e) {}
        let v21;
        try { v21 = Object.getOwnPropertyNames(); } catch (e) {}
        var old_destination_bytecodes = v21;
        return isFinite;
    }
}
const v23 = C3?.call;
try { new v23(-3.7726598760479947e+307); } catch (e) {}
const v25 = new C3(-490.00960199547563);
try { v25.constructor(-3.7726598760479947e+307); } catch (e) {}
const v27 = new C3(-490.00960199547563);
const v28 = v27?.constructor;
function killall() {
}
killall();
var imul_func = Math.imul;
function imul_polyfill(a35, a36) {
    var ah = (a35 >>> 16) & 65535;
    var al = a35 & 65535;
    const v48 = (a36 >>> 16) & 65535;
    var bl = a36 & 65535;
    return ((al * bl) + ((((ah * bl) + (al * v48)) << 16) >>> 0)) | 0;
}
function TestMathImul(a64, a65, a66) {
    function imul_meth_closure(a68, a69) {
        return Math.imul(a68, a69);
    }
    function imul_func_closure(a72, a73) {
        return imul_func(a72, a73);
    }
    imul_polyfill(a65, a66);
    Math.imul(a65, a66);
    imul_func(a65, a66);
    imul_meth_closure(a65, a66);
    imul_meth_closure(a65, a66);
    imul_func_closure(a65, a66);
    imul_func_closure(a65, a66);
    imul_func_closure(a65, a66);
}
TestMathImul(8, 2, 4);
TestMathImul(-8, -1, 8);
TestMathImul(-65536, 4294967294, 5);
TestMathImul(0, 7, false);
TestMathImul(7, true, 7);
TestMathImul(7, 7);
TestMathImul(0, false, true);
TestMathImul(0, undefined, 7);
TestMathImul(0, 7, undefined);
TestMathImul(0, -0, 7);
TestMathImul(0, 0.1, 7);
TestMathImul(7, 1.1, 7);
TestMathImul(65536, "str", 7);
TestMathImul(0, 7, "str");
TestMathImul(0, {}, 7);
TestMathImul(0, [], 7);
var two_30 = 1 << 30;
TestMathImul(0, -two_30, -two_30);
var two_31 = 65536 * two_30;
TestMathImul(-two_31, two_31, 7);
TestMathImul(-two_31, 7, two_31);
try { new v28(C3); } catch (e) {}
const v165 = { type: "str" };
function RunOneTruncationTest(a167, a168) {
    a167 | 0;
}
RunOneTruncationTest();
RunOneTruncationTest();
RunOneTruncationTest();
RunOneTruncationTest();
RunOneTruncationTest();
RunOneTruncationTest();
const v177 = new C3(65536);
class C178 {
    toString(a180, a181, a182, a183) {
        const t89 = {};
        t89.h = v27;
        const v185 = {};
        v185.h = v27;
        v185.e = C3;
        const v186 = {};
        v186.h = v27;
        v186.e = C3;
        v186.g = v177;
        const v187 = {};
        v187.h = v27;
        v187.e = C3;
        Math.log(2);
        Math.log(2 / 562949953421312);
        Math.log();
        v187.g = a183;
        return -490.00960199547563;
    }
}
new C178();
new C178();
new C178();
function f197(a198, a199, a200, a201) {
    a199 ?? a199;
    a200 ?? a200;
    a201 ?? a201;
    baz.name;
    const v207 = baz(f197, baz, f197);
    const t117 = Boolean.prototype;
    t117.foo = 42;
    function f211() {
        for (let v212 = 0; v212 < 5; v212++) {
            v212 < __v_5;
        }
        return f211;
    }
    try { f211(); } catch (e) {}
    v207 !== v207;
    return v207;
}
function baz() {
    const v218 = f197.arguments;
    v218[0];
    const v220 = v218[0];
    v220 % v220;
    return v220;
}
11 - 11;
f197(11);
