const v1 = new Int16Array(Int16Array);
for (let v2 = 0; v2 < 25; v2++) {
    v1["p" + v2] = v2;
}
v1[Symbol.unscopables];
