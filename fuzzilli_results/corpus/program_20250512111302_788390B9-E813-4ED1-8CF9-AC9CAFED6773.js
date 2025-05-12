BigUint64Array.length = BigUint64Array;
new BigUint64Array(5);
const v5 = new BigUint64Array(208);
try { new Int16Array(208, -12139n, Int16Array); } catch (e) {}
new Int16Array(1);
function F() {
    this.x = 42;
    this.x;
    this.y = 87;
}
new F();
const v17 = new F();
v17.y = v17;
var result_x;
function f21(a22) {
    result_x = a22;
}
f21.length;
const v25 = Object.prototype;
v25.__defineSetter__("x", f21);
const v27 = new F();
const v28 = v27?.hasOwnProperty;
try { new v28(v5); } catch (e) {}
var f = v27;
const v32 = typeof f.x;
v32[1] = v32;
v32 == "undefined";
undefined ?? undefined;
var result_y;
const v38 = new Object();
v38.g = v38;
var proto = v38;
function f41(a42) {
    result_y = a42;
}
const v43 = v25.__defineSetter__("y", f41);
v43 ?? v43;
const v45 = new F();
var f = v45;
undefined ?? undefined;
f.y = undefined;
f.__proto__ = proto;
F.call(f);
let v50 = 87;
v50++;
const v52 = f.y;
v52 ?? v52;
const v54 = typeof v52;
try { v54.normalize(); } catch (e) {}
const v57 = v54 == "undefined";
v57 || v57;
