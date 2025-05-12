const v2 = new Int32Array(2987);
new Int8Array(v2);
const v6 = [0];
v6.constructor = Int8Array;
const v9 = Array.prototype.concat;
try { v9.call(v6); } catch (e) {}
