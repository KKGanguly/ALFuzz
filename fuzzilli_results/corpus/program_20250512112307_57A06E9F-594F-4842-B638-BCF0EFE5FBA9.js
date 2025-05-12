const v1 = new Set();
const v2 = { __proto__: v1 };
try { v2.clear(v2, v2, v1, v2, v2); } catch (e) {}
