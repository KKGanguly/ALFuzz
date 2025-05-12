new BigInt64Array(2031);
new BigInt64Array(102);
new BigUint64Array(9);
/(\xed\xb0\x80)\x01/syig;
/a\b!*/msyv;
/z/msyigv;
var imul_func = Math.imul;
function imul_polyfill(a16, a17) {
    var ah = (a16 >>> 16) & 65535;
    var al = a16 & 65535;
    const v29 = (a17 >>> 16) & 65535;
    var bl = a17 & 65535;
    return ((al * bl) + ((((ah * bl) + (al * v29)) << 16) >>> 0)) | 0;
}
function TestMathImul(a45, a46, a47) {
    function imul_meth_closure(a49, a50) {
        return Math.imul(a49, a50);
    }
    function imul_func_closure(a53, a54) {
        return imul_func(a53, a54);
    }
    imul_polyfill(a46, a47);
    Math.imul(a46, a47);
    imul_func(a46, a47);
    imul_meth_closure(a46, a47);
    imul_meth_closure(a46, a47);
    imul_func_closure(a46, a47);
}
-8;
-1;
-2;
TestMathImul(7, 7);
TestMathImul(1, true, true);
function f76(a77, a78) {
    this.x = a77;
    this.y = a78;
    return this;
}
function C() {
}
function test_load() {
    const v86 = new f76(1, 2);
    var a = v86;
    return ((a.x + a.x) + a.x) + a.x;
}
function test_load_from_different_contexts() {
    var r = 1;
    function f98() {
        var fr = r;
        function f100(a101) {
            var gr;
            if (a101) {
                gr = r;
            } else {
                gr = r;
            }
            return (gr + r) + fr;
        }
        this.g = f100;
    }
    this.f = f98;
    this.f();
    return this.g(true);
}
function test_store_load() {
    const v116 = new f76(1, 2);
    var a = v116;
    a.x = 4;
    var f = a.x;
    a.x = 5;
    var g = a.x;
    a.x = 6;
    var h = a.x;
    a.x = 7;
    return ((f + g) + h) + a.x;
}
function test_nonaliasing_store1() {
    const v135 = new f76(2, 3);
    var a = v135;
    const v139 = new f76(3, 4);
    var b = v139;
    b.x = 4;
    var f = a.x;
    b.x = 5;
    var g = a.x;
    b.x = 6;
    var h = a.x;
    b.x = 7;
    return ((f + g) + h) + a.x;
}
function test_transitioning_store1() {
    const v158 = new f76(2, 3);
    var a = v158;
    var f = a.x;
    var g = a.y;
    const v166 = new f76(3, 4);
    var b = v166;
    return a.x + a.y;
}
function test_transitioning_store2() {
    const v172 = new C();
    var b = v172;
    const v177 = new f76(-1, 5);
    var a = v177;
    var f = a.x;
    var g = a.y;
    b.x = 9;
    b.y = 11;
    return a.x + a.y;
}
var false_v = false;
function test_transitioning_store3() {
    const v191 = new C();
    var o = v191;
    if (false_v) {
        o = 0;
    }
    o.x = 20;
    return o.x;
}
function killall() {
}
function test_store_load_kill() {
    const v200 = new f76(1, 2);
    var a = v200;
    a.x = 4;
    var f = a.x;
    a.x = 5;
    var g = a.x;
    killall();
    a.x = 6;
    var h = a.x;
    a.x = 7;
    ((f + g) + h) + a.x;
}
function test_store_store() {
    const v220 = new f76(6, 7);
    var a = v220;
    a.x = 7;
    a.x;
}
function test(a225, a226) {
    a226();
}
test(4, test_load);
new test_load_from_different_contexts();
test(22, test_store_load);
test(8, test_nonaliasing_store1);
test(5, test_transitioning_store1);
test(4, test_transitioning_store2);
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
TestMathImul(0, 7, "str");
TestMathImul(0, {}, 7);
TestMathImul(0, 7, {});
TestMathImul(0, [], 7);
TestMathImul(0, 7, []);
var two_30 = 1 << 30;
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
TestMathImul(4, 7, max_val);
TestMathImul(1, max_val, max_val);
var two_16 = 1 << 16;
TestMathImul(0, two_16, two_16);
TestMathImul(-two_16, two_16 - 1, two_16);
TestMathImul(-two_16, two_16, two_16 - 1);
TestMathImul((-2 * two_16) + 1, two_16 - 1, two_16 - 1);
