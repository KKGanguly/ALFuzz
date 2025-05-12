const v1 = new Set();
const v3 = Symbol.iterator;
Symbol.for(v3.description);
const v6 = v1[v3]();
try { v6.reduce(v3); } catch (e) {}
