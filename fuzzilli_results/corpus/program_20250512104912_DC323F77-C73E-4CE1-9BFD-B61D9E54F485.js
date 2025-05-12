function f0(a1, a2) {
    this.x = a1;
    this.y = a2;
    return this;
}
function C() {
}
function test_load() {
    const v10 = new f0(1, 2);
    var a = v10;
    return ((a.x + a.x) + a.x) + a.x;
}
function test_load_from_different_contexts() {
    var r = 1;
    function f22() {
        var fr = r;
        function f24(a25) {
            var gr;
            if (a25) {
                gr = r;
            } else {
                gr = r;
            }
            return (gr + r) + fr;
        }
        this.g = f24;
    }
    this.f = f22;
    this.f();
    return this.g(true);
}
function test_store_load() {
    const v40 = new f0(1, 2);
    var a = v40;
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
    const v59 = new f0(2, 3);
    var a = v59;
    const v63 = new f0(3, 4);
    var b = v63;
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
    const v82 = new f0(2, 3);
    var a = v82;
    var f = a.x;
    var g = a.y;
    const v90 = new f0(3, 4);
    var b = v90;
    return a.x + a.y;
}
function test_transitioning_store2() {
    const v96 = new C();
    var b = v96;
    const v101 = new f0(-1, 5);
    var a = v101;
    var f = a.x;
    var g = a.y;
    b.x = 9;
    b.y = 11;
    return a.x + a.y;
}
var false_v = false;
function test_transitioning_store3() {
    const v115 = new C();
    var o = v115;
    if (false_v) {
        o = 0;
    }
    o.x = 20;
    return o.x;
}
function killall() {
}
function test_store_load_kill() {
    const v124 = new f0(1, 2);
    var a = v124;
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
    const v144 = new f0(6, 7);
    var a = v144;
    a.x = 7;
    return a.x;
}
function test(a152, a153) {
    a153();
    a153();
}
test(4, test_load);
new test_load_from_different_contexts();
test(22, test_store_load);
test(8, test_nonaliasing_store1);
test(5, test_transitioning_store1);
test(4, test_transitioning_store2);
test(20, test_transitioning_store3);
