function f0() {
    return f0;
}
f0.toString();
for (let i3 = 0; i3 < 1000000; i3++) {
}
let v9;
try { v9 = f0(); } catch (e) {}
v9 ?? v9;
