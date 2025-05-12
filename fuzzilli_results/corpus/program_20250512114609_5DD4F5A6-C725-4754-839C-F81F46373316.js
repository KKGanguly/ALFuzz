function f0(a1) {
    return f0;
}
function f2(a3, a4, a5) {
    const v11 = {
        valueOf(a7, a8, a9, a10) {
            return f2;
        },
        257: f0,
    };
    return f2;
}
for (let v12 = 0; v12 < 5; v12++) {
    f2(v12, f2, v12);
    %OptimizeMaglevOnNextCall(f2);
}
