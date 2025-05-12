function f0() {
    return { h: 1e-15 };
}
const v3 = f0();
function f4(a5, a6) {
    const v7 = { h: f0, [a6]: a5, __proto__: f0, ...v3 };
    return a5;
}
f4();
f4(v3, f0);
