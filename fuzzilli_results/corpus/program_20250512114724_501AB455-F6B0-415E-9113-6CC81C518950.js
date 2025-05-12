const v4 = new ArrayBuffer(512, { maxByteLength: 2147483649 });
const v6 = new Uint8ClampedArray(v4);
v6[351] = v6;
