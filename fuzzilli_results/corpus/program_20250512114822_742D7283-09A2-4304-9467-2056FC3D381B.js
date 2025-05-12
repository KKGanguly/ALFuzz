const v1 = new Set();
const v4 = v1[Symbol.iterator]();
try { v4.take(v4); } catch (e) {}
