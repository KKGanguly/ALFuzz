[4.34707944944236,5.0,0.1704546787321557,1.7976931348623157e+308,-5.0,-5.356572659275036e+307,1000000000.0,-942078.8964533715];
new Uint8Array(255);
const v7 = Array.prototype;
try { v7.call(); } catch (e) {}
const v12 = [5,,7];
function f13() {
    v12.length = 1;
    return 1;
}
const v15 = { valueOf: f13 };
v12.lastIndexOf(undefined);
v12.lastIndexOf(5);
const v23 = [5];
function f24() {
    v23.length = 0;
    return 2;
}
const v27 = { valueOf: f24 };
function f29(a30, a31) {
    a31 in a30;
}
Object.setPrototypeOf(v23, { has: f29 });
Array.prototype.lastIndexOf.call(v23, undefined);
function f39(a40) {
    const v43 = [5];
    const v44 = [];
    function f45() {
        v44.push();
        return true;
    }
    function f49() {
        v44.push("Get");
    }
    const v52 = { has: f45, get: f49 };
    Object.setPrototypeOf(v43, Proxy);
    Array.prototype.lastIndexOf.call(v43);
    [];
    return Proxy;
}
f39();
f39();
const v62 = Array();
function f64() {
    return v27;
}
Object.defineProperty(v62, 9998, { get: f64 });
Array.prototype.lastIndexOf.call(v62);
new Int32Array();
new Uint32Array();
function f75() {
    var left = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    var right = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
    for (let i81 = 0; i81 < 100000; i81++) {
        var index = (left + right).substring(20, 80).indexOf("Y");
    }
}
f75();
