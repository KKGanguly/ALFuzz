function f0() {
    const v5 = {
        g: -2.2250738585072014e-308,
        valueOf(a3, a4) {
            return -2.2250738585072014e-308;
        },
    };
    return v5;
}
const v6 = f0();
const v10 = {
    ...v6,
    [f0](a8, a9) {
    },
};
