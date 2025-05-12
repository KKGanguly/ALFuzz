let v2;
try { v2 = new BigUint64Array(Int16Array); } catch (e) {}
const v3 = new BigUint64Array(v2, v2, v2);
v3.toSorted();
