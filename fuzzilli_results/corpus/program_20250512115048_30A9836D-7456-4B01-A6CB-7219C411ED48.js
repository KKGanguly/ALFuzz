function f1() {
    return f1;
}
const v2 = new Uint16Array(f1, f1, f1);
const t4 = v2.constructor;
const v4 = new t4(Uint16Array);
v4.includes(f1);
