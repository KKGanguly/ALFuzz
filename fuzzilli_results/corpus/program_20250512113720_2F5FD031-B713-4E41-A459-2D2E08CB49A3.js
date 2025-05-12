function f0() {
    return f0;
}
const v1 = f0.bind();
const v3 = Array.prototype;
try { v3.with(v1); } catch (e) {}
