const v1 = [536870889,536870889,536870889,536870889,536870889];
const v3 = Symbol.species;
v1.constructor = { [v3]: 536870889 };
const v7 = Array.prototype.concat;
try { v7.call(v1); } catch (e) {}
