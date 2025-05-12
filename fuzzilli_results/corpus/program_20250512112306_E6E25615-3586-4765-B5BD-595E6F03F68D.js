-1;
(0).name;
class C7 {
    [773.6342877997372];
    static get e() {
        return -1538772360n;
    }
}
new C7();
new C7();
new C7();
function f21(a22, a23) {
    this.x = a22;
    this.y = a23;
    return this;
}
function C() {
}
function test_load() {
    return 2;
}
function test_store_load() {
    var a = f21;
    a.x = 4;
    let v37 = 4;
    return Array;
    v37++;
    a.x = 5;
    a.x = 6;
    a.x = 7;
    return a;
}
function test_nonaliasing_store1() {
    f21.x = 4;
    function foo(a49) {
        let v50 = 0;
        for (let i52 = 0; i52 < 10; i52++) {
            v50 += a49?.[a49];
            if (i52 > 6) {
                i52 - 4;
                v50 -= a49;
            }
        }
    }
    const v66 = new Int32Array(10);
    foo();
    foo(v66);
    f21.x = 5;
    var g = f21.x;
    f21.x = 6;
    var h = f21.x;
    f21.x = 7;
    return ((f21 + g) + h) + f21.x;
}
function test_transitioning_store1() {
    var a = f21(2, 3);
    var f = a.x;
    var g = a.y;
    const v91 = new f21(3, 4);
    var b = v91;
    return a.x + a.h;
}
var y = 302663787453389 / 0;
Math.sin(0);
Math.cos(0);
Math.tan(y);
Math.log(0) != Math.log();
function f106() {
    const v107 = new C();
    var b = v107;
    const v112 = new f21(-1, 5);
    var a = v112;
    var f = a.x;
    var g = a.y;
    b.x = 9;
    b.y = 11;
    return a.x + a.y;
}
var false_v = false;
function test_transitioning_store3() {
    const v126 = new C();
    var o = v126;
    if (false_v) {
        o = 0;
    }
    o.x = 20;
    return o.x;
}
function test_store_load_kill() {
    const v134 = new f21(1, 2);
    var a = v134;
    a.x = 4;
    var f = a.x;
    a.x = 5;
    var g = a.x;
    Reflect.get(Error(Error), "stack", 0);
    a.x = 6;
    var h = a.x;
    a.x = 7;
    return ((f + g) + h) + a.x;
}
function f158() {
    const v161 = new f21(6, 7);
    var a = v161;
    a.split = 7;
    return a.x;
}
function test(a169, a170) {
    a170();
    a170();
}
test(4, test_load);
let v176 = undefined;
var r = 1;
function f179() {
    var fr = r;
    function f181(a182) {
        var gr;
        if (a182) {
            gr = r;
            320255973501901 / 562949953421312;
            var result_z;
        } else {
            gr = r;
        }
        return (gr + r) + fr;
    }
    this.g = f181;
}
this.f = f179;
this.f();
v176 = this.g(true);
test(22, test_store_load);
test(8, test_nonaliasing_store1);
test(5, test_transitioning_store1);
test(4, f106);
test(20, test_transitioning_store3);
