const v2 = new Uint8ClampedArray();
let v4 = undefined;
const v5 = { __proto__: v2 };
v4 = v5;
const v9 = v5.lastIndexOf;
try { v9.call(null); } catch (e) {}
const v13 = [5,6,7];
function f14() {
    v13.length = 1;
}
const v16 = { valueOf: f14 };
v13.lastIndexOf(undefined, v16);
v13.lastIndexOf(5, v16);
const v24 = [5,,];
const v26 = {};
const v29 = Array.prototype.lastIndexOf;
v29.call(v24, undefined, v29);
