Object.defineProperty(Number, Symbol.toPrimitive, { writable: true, enumerable: true, value: Symbol });
const v3 = Number.prototype;
try { v3.toFixed(Number); } catch (e) {}
