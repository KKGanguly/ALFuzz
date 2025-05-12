Uint8ClampedArray[0] = 255;
const v2 = Uint8ClampedArray[0];
const v4 = new Uint8ClampedArray(4);
v4.lastIndexOf(v2);
Object.setPrototypeOf(Uint8ClampedArray, {});
