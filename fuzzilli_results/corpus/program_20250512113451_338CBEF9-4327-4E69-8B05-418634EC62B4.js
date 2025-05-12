function f0() {
    return f0;
}
const v1 = typeof f0;
for (let i3 = 0; i3 < 1000000; i3++) {
}
v1 == "undefined";
