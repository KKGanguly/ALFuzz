const v3 = new WeakMap();
const v4 = [WeakMap,v3,2,v3,1947327886];
[v4,v3,v4,WeakMap];
[1947327886,WeakMap,v4];
[5.0,0.0,Infinity,-1.6348930271241185e+308];
[1000000000000.0];
[-1000000.0,1.7976931348623157e+308,2.0,1.6671562989887038e+308,1.0,-1.7976931348623157e+308,0.0];
function f10() {
    this.x = 42;
    new Proxy(this, {});
    try {
        f10();
    } catch(e18) {
    }
    this.y = 87;
}
new f10();
new f10();
var result_x;
function f25(a26) {
    function f27() {
        return f27;
    }
    f27.prototype = 1;
    result_x = a26;
}
Object.prototype;
const v31 = new f10();
var f = v31;
typeof f.x == "undefined";
var result_y;
const v40 = new Object();
var proto = v40;
function f43(a44) {
    result_y = a44;
}
proto.__defineSetter__("y", f43);
const v46 = new f10();
var f = v46;
f10.call(f);
typeof f.y == "undefined";
var result_z;
const v57 = new Object();
var o1 = v57;
new Object();
var o2 = 42;
o1.z = 32;
function f63(a64) {
    result_z = f63;
}
Object.__defineSetter__("z", f63);
o2.z = 27;
o2.z == "undefined";
