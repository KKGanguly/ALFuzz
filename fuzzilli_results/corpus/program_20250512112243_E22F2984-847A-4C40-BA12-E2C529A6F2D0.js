function f1(a2, a3, a4) {
    return f1;
}
const t3 = Number.prototype;
t3.__proto__ = f1;
const v7 = Number.prototype;
try { v7.apply(0, 0); } catch (e) {}
