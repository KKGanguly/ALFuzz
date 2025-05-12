const v1 = new Float32Array();
const v3 = new Uint32Array(v1, Uint32Array);
try { v3.toSorted(v1); } catch (e) {}
