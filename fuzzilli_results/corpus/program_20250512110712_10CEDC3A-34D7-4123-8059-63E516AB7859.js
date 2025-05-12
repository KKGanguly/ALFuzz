const v4 = new Map();
const v5 = [839.8939103601954,v4,v4];
const v6 = [Map,553445.4841123966,5.0];
const v7 = [Map,v6,v4];
class C8 extends Map {
    constructor(a10, a11) {
        super(v4);
        v7.__proto__ = v7[v6];
        let v13;
        try { v13 = a11.concat(); } catch (e) {}
        try { new v13(v6); } catch (e) {}
    }
    a;
    static 128 = 839.8939103601954;
    #b;
}
new C8(v7, v7);
new C8(v5, v6);
new C8(v7, v5);
function F() {
    this.x = 42;
    this.y = 87;
}
new F();
new F();
var result_x;
function f28(a29) {
    result_x = a29;
    Array.__proto__ = null;
    ([Array]).slice();
}
Object.prototype.__defineSetter__("x", f28);
const v37 = new F();
var f = v37;
typeof f.x == "undefined";
var result_y;
const v46 = new Object();
var proto = v46;
function f49(a50) {
    result_y = a50;
    new Object();
    function RunOneTruncationTest(a54, a55) {
        a54 | 0;
    }
    RunOneTruncationTest();
}
proto.__defineSetter__("y", f49);
const v60 = new F();
var f = v60;
f.y = undefined;
f.__proto__ = proto;
F.call(f);
typeof f.y == "undefined";
var result_z;
const v71 = new Object();
var o1 = v71;
const v73 = new Object();
var o2 = v73;
o1.z = 32;
function f77(a78) {
    result_z = a78;
}
Object.prototype.__defineSetter__("z", f77);
o2.z = 27;
typeof o2.z == "undefined";
