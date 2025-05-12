function f0() {
}
const v1 = {};
const v2 = { set: f0 };
const v6 = new Uint32Array(1000);
v6.lastIndexOf(1000);
const v8 = new Proxy(v1, v2);
v8.e = v8;
