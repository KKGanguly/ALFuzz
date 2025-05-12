function f1(a2) {
    const v4 = arguments.callee;
    try { new v4(a2, v4, arguments, 0.0, f1); } catch (e) {}
    return arguments;
}
const v7 = f1().callee(0.0);
v7[0] = v7;
