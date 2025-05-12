const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v0;
    this.e = v0;
    this.c = v0;
}
const v3 = new F1();
const v4 = new F1();
Array(10000);
const v9 = new Error(Error);
const v10 = new F1();
const v14 = [-9007199254740992];
const v15 = {};
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
TestMathImul(10000, 4294967294, 5);
TestMathImul(0, 7, false);
TestMathImul(7, true, 7);
TestMathImul(10000, 7);
TestMathImul(0, false, true);
const v88 = TestMathImul(0, true, false);
TestMathImul(0, undefined, 7);
TestMathImul(0, 7, undefined);
v14[0];
function F99(a101, a102) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a102;
    this.f = v88;
}
new F99(v3, imul_func);
new F99(v4, 1000.0);
new F99(v10, imul_func);
TestMathImul(0, undefined, undefined);
TestMathImul(10000, 7, -0);
TestMathImul(0, 7, 0.1);
TestMathImul(10000, 0.9, 7);
TestMathImul(7, 1.1, 7);
TestMathImul(0, 7, "str");
TestMathImul(0, 7, {});
var two_30 = 1 << 30;
TestMathImul(0, two_30, two_30);
TestMathImul(two_30, -two_30, 7);
TestMathImul(two_30, 7, -two_30);
TestMathImul(0, -two_30, -two_30);
var two_31 = 2 * two_30;
TestMathImul(-two_31, -two_31, 7);
TestMathImul(1, 1e-15, 1e-15);
[536870912];
[64,9007199254740990,1997484370,-34063,14,-42791,128,-1239896322,268435440,-9223372036854775807];
function f159() {
    return F1;
}
new Uint8Array(2801);
new Float32Array(2665);
new BigInt64Array(134);
const v172 = Array.prototype.lastIndexOf;
try { v172.call(null); } catch (e) {}
const v174 = Array.prototype;
const v175 = v174.lastIndexOf;
try { v175.call(); } catch (e) {}
const v180 = [5,,7];
function f181() {
    return f181;
}
const t87 = 0;
t87.f = f181;
var two_30 = 0;
TestMathImul(-two_30, two_30, 7);
TestMathImul(0, two_30, two_30);
TestMathImul(two_30, -two_30, 7);
TestMathImul(two_30, 2801, -two_30);
v174.a ??= 7;
new Int8Array(2);
new Int32Array(1000);
new Uint8Array(3);
const v203 = 2 * two_30;
function f204(a205, a206) {
    function f208(a209) {
        this[a209] = a209;
    }
    this.onmessage = f208;
    v9.name;
}
const v213 = [0,"function"];
new Worker(f204, { arguments: v213, type: "function" });
var two_31 = v203;
TestMathImul(-two_31, two_31, 7);
function f219() {
    v180.length = 1;
    return 1;
}
const v221 = { valueOf: f219 };
v180.lastIndexOf(undefined, v221);
v180.lastIndexOf(5, v221);
const v229 = [5,,];
function f230() {
    v229.length = 0;
    return 2;
}
const v233 = { valueOf: f230 };
function f235(a236, a237) {
    a237 in a236;
}
const v240 = new Proxy(Array, { has: f235 });
Object.setPrototypeOf(v229, v240);
const v245 = Array.prototype.lastIndexOf.call(v229, undefined, v233);
function f246(a247) {
    const v250 = [5,,];
    const v251 = [];
    function f252() {
        v251.push("HasProperty");
        return true;
    }
    function f256() {
        v251.push("Get");
    }
    const v260 = new Proxy(Array, { has: f252, get: f256 });
    Object.setPrototypeOf(v250, v260);
    Array.prototype.lastIndexOf.call(v250);
    ["HasProperty"];
    return v260;
}
f246();
f246(v245);
const v270 = Array(10000);
const v271 = v270.__proto__;
function f273() {
    return v233;
}
Object.defineProperty(v271, 9998, { get: f273 });
const v277 = Array.prototype.lastIndexOf;
function f279(a280, a281) {
    a280[0] = a281;
    return a281;
}
const v282 = new Uint8ClampedArray(0);
try { f279(Infinity, Infinity); } catch (e) {}
f279(v282, -Infinity);
v277.call(v270);
