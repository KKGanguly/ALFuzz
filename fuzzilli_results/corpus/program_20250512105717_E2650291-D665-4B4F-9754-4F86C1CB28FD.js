function f0() {
    return f0;
}
const t3 = f0.constructor;
t3().name;
