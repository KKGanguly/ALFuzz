function f1() {
    this.x = 42;
    this.y = 87;
    return 42;
}
new f1();
function f7(a8) {
    return a8;
}
const v10 = Object.prototype;
f1();
Object.defineProperty(v10, 9, { enumerable: true, get: f1, set: f7 });
gc();
f1();
const t12 = Object.prototype;
t12[7] /= -1.7941453938990453;
