const v1 = [Object,Object,Object,Object];
const v3 = Symbol.species;
v1.constructor = { [v3]: Object };
Array.prototype.concat.call(v1);
