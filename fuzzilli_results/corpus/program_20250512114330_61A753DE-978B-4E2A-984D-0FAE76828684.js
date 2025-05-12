function f1(a2) {
    return f1;
}
const v5 = f1.constructor;
try { v5(Array, 0, Array, 1); } catch (e) {}
