const v0 = [10000,7,-16,25413,-502110073,-65536,-9007199254740990,11,16];
const v1 = [25870,536870912,4294967297];
const v2 = [255,512,-929463342,1,-41775,1322322153,-6];
8.410755168231021e+307 << 8.410755168231021e+307;
function f7(a8, a9, a10) {
    const v11 = a10?.map;
    try { new v11(a10); } catch (e) {}
    const v19 = {
        b: v0,
        __proto__: v2,
        [v2]: a9,
        f: a9,
        get h() {
            super[this];
            [182616.70475832536,1000000.0,-5.4406030725647134e+306,-9.561824626622129e+306,4.0,0.8331359276714013,604.6419893685131,1000000000.0,4.0];
            [-1.2370818485060566e+308,-2.2250738585072014e-308,-1000.0,-1000.0,-7.340173724692547e+307,275.71143169268726,2.408146584976034,-103.36221660610124];
            [1000000000.0,2.8082080005971193,-5.0,-8.12118383335748,66.11321622733658,0.964171403256402,-52.68950165502349,0.24260402477368648,5.0,0.1761581202766288];
            return super.c;
        },
    };
    v19.b;
    return v19;
}
f7(v0, v2, v1);
f7(v2, f7, v1);
f7(v1, 8.410755168231021e+307, v0);
function f24(a25, a26) {
    this.x = a25;
    this.y = a26;
    return this;
}
function C() {
}
try { C.apply(8.410755168231021e+307, v0); } catch (e) {}
function test_load() {
    const v35 = new f24(1, 2);
    var a = v35;
    return ((a.x + a.x) + a.x) + a.x;
}
test_load.name;
function test_load_from_different_contexts() {
    var r = 1;
    function f48() {
        var fr = r;
        function f50(a51) {
            var gr;
            if (a51) {
                gr = r;
            } else {
                gr = r;
            }
            return (gr + r) + fr;
        }
        this.g = f50;
    }
    this.f = f48;
    this.f();
    return this.g(true);
}
function test_store_load() {
    const v66 = new f24(1, 2);
    var a = v66;
    a.x = 4;
    var f = a.x;
    a.x = 5;
    var g = a.x;
    a.x = 6;
    var h = a.x;
    a.x = 7;
    return ((f + g) + h) + a.x;
}
test_store_load.prototype = test_store_load;
function test_nonaliasing_store1() {
    const v85 = new f24(2, 3);
    var a = v85;
    const v89 = new f24(3, 4);
    var b = v89;
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
    const v108 = new f24(2, 3);
    var a = v108;
    var f = a.x;
    var g = a.y;
    const v116 = new f24(3, 4);
    var b = v116;
    return a.x + a.y;
}
try { test_transitioning_store1.call(8.410755168231021e+307); } catch (e) {}
function test_transitioning_store2() {
    const v123 = new C();
    var b = v123;
    const v128 = new f24(-1, 5);
    var a = v128;
    var f = a.x;
    var g = a.y;
    b.x = 9;
    b.y = 11;
    return a.x + a.y;
}
var false_v = false;
false_v && false_v;
function test_transitioning_store3() {
    const v143 = new C();
    var o = v143;
    if (false_v) {
        o = 0;
    }
    o.x = 20;
    return o.x;
}
function killall() {
}
killall.length = killall;
function test_store_load_kill() {
    const v152 = new f24(1, 2);
    var a = v152;
    a.x = 4;
    var f = a.x;
    a.x = 5;
    var g = a.x;
    killall();
    a.x = 6;
    var h = a.x;
    a.x = 7;
    return ((f + g) + h) + a.x;
}
test_store_load_kill.name;
function test_store_store() {
    const v173 = new f24(6, 7);
    var a = v173;
    a.x = 7;
    return a.x;
}
function test(a181, a182) {
    a182();
    a182();
}
function f186(a187, a188) {
    this.x = a187;
    try { this.call(a187); } catch (e) {}
    this.y = a188;
    return this;
}
f186.prototype = f186;
function C() {
}
function test_load() {
    1 ^ 1;
    const v198 = new f186(1, 2);
    v198.b = v198;
    var a = v198;
    try { a.b(); } catch (e) {}
    const v201 = a.x;
    v201 % v201;
    const v204 = v201 + a.x;
    const v205 = a.x;
    v205 - v205;
    return (v204 + v205) + a.x;
}
function test_load_from_different_contexts() {
    var r = 1;
    r - r;
    function f214() {
        var fr = r;
        function f216(a217) {
            var gr;
            if (a217) {
                gr = r;
            } else {
                gr = r;
            }
            const v220 = gr + r;
            v220 <= v220;
            return v220 + fr;
        }
        this.g = f216;
    }
    try { f214(); } catch (e) {}
    const v226 = this?.g;
    try { new v226(f214); } catch (e) {}
    this.f = f214;
    const v229 = this?.g;
    try { new v229(f214); } catch (e) {}
    const v231 = this.f();
    v231 ?? v231;
    try { this.g(8.410755168231021e+307); } catch (e) {}
    let v236 = this.g(true);
    v236++;
    return v236;
}
function test_store_load() {
    const v241 = new f186(1, 2);
    try { v241.propertyIsEnumerable(1); } catch (e) {}
    var a = v241;
    a.y = a;
    a.x = 4;
    const v245 = a.x;
    v245 / v245;
    var f = v245;
    f - f;
    a.x = 5;
    const v250 = a.x;
    ~v250;
    var g = v250;
    a.x = 6;
    var h = a.x;
    a.x = 7;
    const v257 = f + g;
    -v257;
    return (v257 + h) + a.x;
}
function test_nonaliasing_store1() {
    const v265 = new f186(2, 3);
    var a = v265;
    a.h = a;
    const v269 = new f186(3, 4);
    var b = v269;
    b.x = 4;
    const v272 = a.x;
    v272 === v272;
    var f = v272;
    f << f;
    b.x = 5;
    var g = a.x;
    -g;
    b.x = 6;
    var h = a.x;
    h ^ h;
    b.x = 7;
    let v288 = ((f + g) + h) + a.x;
    v288--;
    return v288;
}
try { test_nonaliasing_store1.call(v1); } catch (e) {}
function test_transitioning_store1() {
    const v294 = new f186(2, 3);
    var a = v294;
    a.c = a;
    var f = a.x;
    const v298 = a.y;
    v298 >>> v298;
    var g = v298;
    ~4;
    const v304 = new f186(3, 4);
    var b = v304;
    const v306 = b?.constructor;
    try { new v306(f24); } catch (e) {}
    const v308 = a.x;
    const v309 = a.y;
    v309 >>> v309;
    return v308 + v309;
}
function test_transitioning_store2() {
    const v313 = new C();
    const v314 = v313?.constructor;
    try { new v314(); } catch (e) {}
    var b = v313;
    let v317 = 1;
    v317--;
    const v321 = new f186(-v317, 5);
    v321.prototype;
    var a = v321;
    const v324 = a.x;
    v324 << v324;
    var f = v324;
    f & f;
    const v328 = a.y;
    ~v328;
    var g = v328;
    g ^ g;
    b.x = 9;
    b.y = 11;
    const v334 = a.x;
    v334 + v334;
    let v337 = v334 + a.y;
    v337--;
    return v337;
}
false && false;
var false_v = false;
false_v || false_v;
function test_transitioning_store3() {
    const v344 = new C();
    var o = v344;
    if (false_v) {
        o = 0;
    }
    o.x = 20;
    return o.x;
}
function killall() {
}
try { killall.call(f186); } catch (e) {}
function test_store_load_kill() {
    const v354 = new f186(1, 2);
    var a = v354;
    a.x = 4;
    var f = a.x;
    a.x = 5;
    var g = a.x;
    killall();
    a.x = 6;
    var h = a.x;
    a.x = 7;
    return ((f + g) + h) + a.x;
}
function test_store_store() {
    const v374 = new f186(6, 7);
    var a = v374;
    a.x = 7;
    return a.x;
}
function test(a382, a383) {
    a382 | a382;
    a383();
    const v386 = a383();
    v386 == v386;
}
test(4, test_load);
const v390 = new test_load_from_different_contexts();
try { v390.constructor(); } catch (e) {}
const v393 = test(22, test_store_load);
v393 ?? v393;
test(8, test_nonaliasing_store1);
test(5, test_transitioning_store1);
test(4, test_transitioning_store2);
test(20, test_transitioning_store3);
const v404 = test(4, test_load);
v404 ?? v404;
const v406 = new test_load_from_different_contexts();
try { v406.constructor(); } catch (e) {}
const v409 = test(22, test_store_load);
v409 ?? v409;
test(8, test_nonaliasing_store1);
let v413 = 5;
v413--;
const v415 = test(v413, test_transitioning_store1);
v415 ?? v415;
const v418 = test(4, test_transitioning_store2);
v418 ?? v418;
test(20, test_transitioning_store3);
let v422 = 7;
v422--;
