Array.__proto__ = null;
function f4() {
    return Array;
}
Object.defineProperty(Int8Array, 1, { configurable: true, enumerable: true, get: f4 });
try { new Uint16Array(Int8Array); } catch (e) {}
