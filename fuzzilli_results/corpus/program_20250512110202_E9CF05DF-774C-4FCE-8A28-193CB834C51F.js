const v1 = this.Worker;
const v2 = [this,this,this,this];
const v4 = Symbol.species;
v2.constructor = { [v4]: v1 };
const v8 = Array.prototype.concat;
try { v8.call(v2); } catch (e) {}
