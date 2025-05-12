function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -18029;
    this.d = -18029;
    this.g = -18029;
}
const v3 = new F0();
new F0(v3, F0, v3);
const v5 = new F0();
function f6() {
    return v5;
}
function f7() {
    return f6;
}
new Int32Array(536870889);
new Uint32Array(2158);
new Uint8ClampedArray(4);
function F() {
    this.x = 42;
    this.y = Uint8ClampedArray;
    this.y = 87;
}
new F();
new F();
var result_x;
function f27(a28) {
    result_x = a28;
}
Object.prototype.__defineSetter__("x", f27);
const v32 = new F();
var f = v32;
typeof f.x == "undefined";
var result_y;
const v41 = new Object();
var proto = v41;
function f44(a45) {
    result_y = a45;
}
proto.__defineSetter__("y", f44);
const v47 = new F();
var f = v47;
f.y = undefined;
f.__proto__ = proto;
F.call(f);
typeof f.buffer == "undefined";
var result_z;
const v58 = new Object();
v58.z = v58;
var o1 = v58;
o1.z = o1;
const v60 = new Object();
var o2 = v60;
o1.z = 32;
function f64(a65) {
    result_z = a65;
}
Object.prototype.__defineSetter__("z", f64);
o2.z = 27;
typeof o2.z == "undefined";
