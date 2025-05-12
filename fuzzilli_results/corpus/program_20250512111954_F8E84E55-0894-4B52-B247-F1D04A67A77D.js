const v3 = [5,,];
const v6 = new Proxy(Array, {});
Object.setPrototypeOf(v3, v6);
for (const v9 in v3) {
}
