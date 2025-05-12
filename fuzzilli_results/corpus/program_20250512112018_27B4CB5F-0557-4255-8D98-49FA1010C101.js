const v3 = [5,,];
function f4() {
    v3.length = 0;
    return Array;
}
({ valueOf: f4 }).valueOf();
const v10 = new Proxy(Array, {});
v10.g = v10;
Object.setPrototypeOf(v3, v10);
for (const v13 in v3) {
}
