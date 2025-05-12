const v3 = [0,1];
const v6 = Array.prototype;
Object.defineProperty(v3, 1000, { configurable: true, value: v6 });
Symbol("x");
v6.concat.call(v3);
