const v2 = new Int32Array(12);
function f5(a6) {
    Object.defineProperty(v2, 3, { writable: true, configurable: true, enumerable: true, value: 192 });
    return a6;
}
Int16Array.valueOf = f5;
Int16Array << 1;
