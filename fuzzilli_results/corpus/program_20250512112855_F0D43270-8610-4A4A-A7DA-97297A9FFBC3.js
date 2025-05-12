const v2 = new Int8Array(512);
new Float64Array(v2);
const v5 = [v2,v2,v2];
function f6(a7) {
    Object.defineProperty(0);
    return 0;
}
const v12 = Symbol.species;
v5.constructor = { [v12]: f6 };
const v16 = Array.prototype.concat;
try { v16.call(v5); } catch (e) {}
