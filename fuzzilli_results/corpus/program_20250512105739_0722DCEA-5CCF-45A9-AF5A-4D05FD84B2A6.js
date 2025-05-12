new Array(16);
[-1000000000.0,4.0,0.2283584518642776,-2.220446049250313e-16,-9.509678728564246,NaN,-1e-15,654286.62707167,8.138101786653549e+307];
[1.2761119164760901e+308,5.053768189341479,1000.0,4.0];
[2.5568763651737465e+307,-13163.906908239704,3.5158342444952346,-434552.4905506199,-1000000000000.0,-1.0,4.0,3.0];
[1000000000000.0,107806.99803433055,-648.3397035917358];
[0.9641907928592587,Infinity];
Worker.prototype = 16;
const v12 = new Worker("", { type: "string" });
v12.postMessage([]);
[-2.2250738585072014e-308,-2.220446049250313e-16,-582.7032575784237,-1000.0,338.289444963129,5.0,541031.840600803,-5.0,-359254.4144114794,1.7976931348623157e+308];
new BigUint64Array(207);
new Uint32Array(822);
new Uint32Array(7);
const v28 = Array.prototype.lastIndexOf;
try { v28.call(null); } catch (e) {}
const v31 = Array.prototype.lastIndexOf;
try { v31.call(); } catch (e) {}
const v36 = [5,,7];
function f37() {
    v36.length = 1;
    return 1;
}
const v39 = { valueOf: f37 };
v36.lastIndexOf(undefined, v39);
v36.lastIndexOf(5, v39);
const v47 = [5,,];
function f48() {
    v47.length = 0;
    return 2;
}
const v51 = { valueOf: f48 };
function f53(a54, a55) {
    a55 in a54;
    let v57 = 0;
    for (let v58 = 0; v58 < 250; v58++) {
        v58 < 2;
        v57 = 2;
        v58++;
    }
}
const v64 = new Proxy(Array, { has: f53 });
Object.setPrototypeOf(v47, v64);
const v69 = Array.prototype.lastIndexOf.call(v47, undefined, v51);
function f70(a71) {
    const v74 = [5,,];
    const v75 = [];
    function f76() {
        v75.push("HasProperty");
        return true;
    }
    function f80() {
        v75.push("Get");
    }
    const v84 = new Proxy(Array, { has: f76, get: f80 });
    Object.setPrototypeOf(v74, v84);
    Array.prototype.lastIndexOf.call(v74);
    ["HasProperty"];
    return v84;
}
f70();
f70(v69);
const v94 = Array(10000);
const v95 = v94.__proto__;
function f97() {
    return v51;
}
Object.defineProperty(v95, 9998, { get: f97 });
Array.prototype.lastIndexOf.call(v94);
