const v0 = {};
const v2 = Number.prototype;
const v3 = v2.constructor;
const v4 = new v3(v3, v2, v3, Number);
function f5(a6, a7) {
    return v0;
}
v4[Symbol.toPrimitive] = f5;
try { v4.toExponential(v4); } catch (e) {}
