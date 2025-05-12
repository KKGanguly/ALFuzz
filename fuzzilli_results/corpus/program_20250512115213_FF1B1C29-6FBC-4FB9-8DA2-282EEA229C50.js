function f1() {
    const v3 = {
        get g() {
            return true;
        },
        ...true,
    };
    return true;
}
for (let i = 0; i < 50; i++) {
    f1();
    %OptimizeMaglevOnNextCall(f1);
}
