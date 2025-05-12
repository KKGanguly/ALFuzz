function f0() {
    return f0;
}
const v2 = f0++;
const v4 = new Float32Array(255);
v4["lastIndexOf"](v2);
