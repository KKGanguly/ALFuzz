const v2 = new Int32Array(16);
function f5() {
    return Uint8ClampedArray;
}
const v8 = new Proxy(Uint32Array, { get: f5 });
const t5 = v8[2];
new t5(v2);
