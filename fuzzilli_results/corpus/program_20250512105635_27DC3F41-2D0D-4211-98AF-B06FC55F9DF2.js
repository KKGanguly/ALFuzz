function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 268435441;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const v15 = {
        g: a7,
        n(a9, a10) {
            var c = a7;
            v4.d;
            try {
                new F0();
            } catch(e14) {
            }
            return this;
        },
    };
    return v15;
}
f6.d = f6;
const v16 = f6(v4);
v16.g = v16;
const v17 = f6(v4);
const v18 = f6(v5);
[v4,v3,v17,f6];
const v20 = [v5,v17];
const v21 = [F0,v20];
try { v21.unshift(v17); } catch (e) {}
function f23(a24, a25) {
    this.x = a24;
    this.e = this;
    this.y = a25;
    this.y = this;
    return this;
}
try { f23(v18, f6); } catch (e) {}
function C() {
}
function test_load() {
    const v34 = new f23(1, 2);
    var a = v34;
    a.b = a;
    const v36 = a.x;
    v36 + v36;
    let v38 = a.x;
    v38--;
    const v40 = v36 + v38;
    v40 + v40;
    const v42 = a.x;
    v42 * v42;
    return (v40 + v42) + a.x;
}
function test_load_from_different_contexts() {
    var r = 1;
    r + r;
    function f51() {
        var fr = r;
        fr++;
        function f54(a55) {
            !a55;
            var gr;
            if (a55) {
                gr = r;
            } else {
                gr = r;
            }
            return (gr + r) + fr;
        }
        try { f54(test_load); } catch (e) {}
        this.g = f54;
    }
    try { this.constructor(); } catch (e) {}
    this.f = f51;
    this.f();
    return this.g(true);
}
test_load_from_different_contexts.d = test_load_from_different_contexts;
function test_store_load() {
    const v73 = new f23(1, 2);
    var a = v73;
    a.x = 4;
    var f = a.x;
    f / f;
    a.x = 5;
    const v80 = a.x;
    v80 / v80;
    var g = v80;
    g--;
    a.x = 6;
    const v85 = a.x;
    v85 >> v85;
    var h = v85;
    h | h;
    a.x = 7;
    return ((f + g) + h) + a.x;
}
function test_nonaliasing_store1() {
    const v97 = new f23(2, 3);
    var a = v97;
    a.a = a;
    const v101 = new f23(3, 4);
    v101.e;
    var b = v101;
    b.e = b;
    b.x = 4;
    const v105 = a.x;
    v105 | v105;
    var f = v105;
    f--;
    5 >>> 5;
    b.x = 5;
    const v111 = a.x;
    v111 - v111;
    var g = v111;
    b.x = 6;
    const v115 = a.x;
    v115 | v115;
    var h = v115;
    h >>> h;
    b.x = 7;
    const v121 = (f + g) + h;
    const v122 = a.x;
    v122 >>> v122;
    return v121 + v122;
}
function test_transitioning_store1() {
    const v128 = new f23(2, 3);
    var a = v128;
    a.x;
    var f = a.x;
    const v133 = a.y;
    v133[1];
    var g = v133;
    const v138 = new f23(3, 4);
    var b = v138;
    b.b = b;
    const v140 = a.x;
    v140 & v140;
    const v142 = a.y;
    try { v142.flat(); } catch (e) {}
    return v140 + v142;
}
function test_transitioning_store2() {
    const v146 = new C();
    const v147 = v146?.__defineGetter__;
    try { new v147(test_transitioning_store2, v20); } catch (e) {}
    var b = v146;
    const v151 = -1;
    ~5;
    const v154 = new f23(v151, 5);
    var a = v154;
    const v156 = a.x;
    v156 - v156;
    var f = v156;
    var g = a.y;
    b.x = 9;
    11 !== 11;
    b.y = 11;
    const v164 = a.x;
    const v165 = a.y;
    v165[1];
    return v164 + v165;
}
!false;
var false_v = false;
function test_transitioning_store3() {
    const v172 = new C();
    var o = v172;
    try { o.propertyIsEnumerable(test_load_from_different_contexts); } catch (e) {}
    if (false_v) {
        o = 0;
    }
    20 >>> 20;
    o.x = 20;
    const v178 = o.x;
    v178 / v178;
    return v178;
}
test_transitioning_store3.prototype = test_transitioning_store3;
function killall() {
}
function test_store_load_kill() {
    const v184 = new f23(1, 2);
    var a = v184;
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
try { new test_store_load_kill(); } catch (e) {}
function test_store_store() {
    const v205 = new f23(6, 7);
    var a = v205;
    a.x = 7;
    return a.x;
}
function test(a213, a214) {
    a214();
    a214();
}
test(4, test_load);
new test_load_from_different_contexts();
22 >> 22;
test(22, test_store_load);
8 - 8;
test(8, test_nonaliasing_store1);
5 % 5;
const v228 = test(5, test_transitioning_store1);
v228 ?? v228;
test(4, test_transitioning_store2);
const v233 = test(20, test_transitioning_store3);
v233 ?? v233;
