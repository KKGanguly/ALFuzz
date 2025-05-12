const v1 = [Array];
const v4 = new Proxy(Array, {});
const v6 = Object.setPrototypeOf(v1, v4);
v6.e = v6;
for (const v7 in v1) {
}
