const v0 = [-721605951,-57545,536870888,436312472,727144662,14299,9007199254740992,268435440,128,32694];
const v1 = [268435456];
[v1,v1,v1,[v1,v1,v0],v0];
function f4(a5, a6) {
    this.x = a5;
    this.y = a6;
}
function C() {
}
function f10() {
    class C13 extends v1.constructor {
        #a;
        #b;
    }
    new C13();
    const v16 = new f4(1, 2);
    var a = v16;
    ((a.x + a.x) + a.x) + a.x;
}
var r = 1;
const v31 = new f4(1, 2);
var a = v31;
a.x = 5;
a.x;
var h = a.x;
0 < 4;
a.x;
function test_nonaliasing_store1() {
    const v44 = new f4(2, 3);
    var a = v44;
    var b = f4(3, 4);
    var f = a.x;
    var g = a.x;
    var h = a.x;
    for (let v57 = 0; v57 < 100; v57++) {
        f10();
    }
    ((f + g) + h) + a.x;
}
const v65 = new f4(2, 3);
var a = v65;
a.x;
var g = a.y;
var b = C();
var false_v = false;
function test_transitioning_store3() {
    var o = C();
    if (false_v) {
    }
    return o.x;
}
function f80() {
    var a = f4(6, 7);
    a.x;
}
function f86(a87, a88) {
    a88();
    a88();
}
f86(8, test_nonaliasing_store1);
