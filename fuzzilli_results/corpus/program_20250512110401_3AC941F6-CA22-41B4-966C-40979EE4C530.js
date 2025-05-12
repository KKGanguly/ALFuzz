const v1 = new Set();
const v4 = v1[Symbol.iterator]();
try { v4.reduce(Symbol); } catch (e) {}
