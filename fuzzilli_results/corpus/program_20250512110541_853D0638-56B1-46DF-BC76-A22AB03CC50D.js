class C5 {
    static [57332n] = 1473829418n;
    f = 57332n;
}
C5.c = C5;
new C5();
C5.h = C5;
function f7(a8) {
    Object.defineProperty(arguments, 0, { enumerable: true, value: C5 });
    arguments.b = arguments;
    try {
    const t0 = "major";
    new t0(arguments);
    } catch (e) {}
    const v14 = { execution: "async" };
    gc();
    return arguments;
}
f7();
