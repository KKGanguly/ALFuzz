function f0() {
    return f0;
}
class C1 {
}
function f2(a3, a4) {
    return { [a4]: a4, 3946: C1 };
}
const v6 = f2(C1, f0);
function f7(a8, a9, a10, a11) {
    const v16 = {
        valueOf(a13, a14, a15) {
            a14[2070338844] = f2;
            return a13;
        },
        ...a11,
    };
    return v16;
}
f7().valueOf(f7, v6);
f7(f2, v6, C1, v6);
