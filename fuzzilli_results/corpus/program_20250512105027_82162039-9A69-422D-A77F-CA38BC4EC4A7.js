const v3 = Array.prototype.lastIndexOf;
try { v3.call(null); } catch (e) {}
const v6 = Array.prototype.lastIndexOf;
try { v6.call(); } catch (e) {}
const v11 = [5,,7];
function f12() {
    v11.length = 1;
    return 1;
}
const v14 = { valueOf: f12 };
v11.lastIndexOf(undefined, v14);
v11.lastIndexOf(5, v14);
const v22 = [5,,];
function f23() {
    v22.length = 0;
    return 2;
}
const v26 = { valueOf: f23 };
function f28(a29, a30) {
    a30 in a29;
}
const v33 = new Proxy(Array, { has: f28 });
Object.setPrototypeOf(v22, v33);
const v38 = Array.prototype.lastIndexOf.call(v22, undefined, v26);
function f39(a40) {
    const v43 = [5,,];
    const v44 = [];
    function f45() {
        v44.push("HasProperty");
        return true;
    }
    function f49() {
        v44.push("Get");
    }
    const v53 = new Proxy(Array, { has: f45, get: f49 });
    Object.setPrototypeOf(v43, v53);
    Array.prototype.lastIndexOf.call(v43);
    ["HasProperty"];
    return v53;
}
f39();
f39(v38);
const v63 = Array(10000);
const v64 = v63.__proto__;
function f66() {
    return v26;
}
Object.defineProperty(v64, 9998, { get: f66 });
Array.prototype.lastIndexOf.call(v63);
