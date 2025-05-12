const v1 = new Uint8Array(Uint8Array);
const v2 = [Uint8Array,Uint8Array];
const v4 = Symbol.species;
v2.constructor = { [v4]: v1 };
const v8 = Array.prototype.concat;
try { v8.call(v2); } catch (e) {}
