const v1 = [0,0];
const v3 = Array.prototype;
v3[Symbol.isConcatSpreadable] = 0;
v3.concat.call(v1);
