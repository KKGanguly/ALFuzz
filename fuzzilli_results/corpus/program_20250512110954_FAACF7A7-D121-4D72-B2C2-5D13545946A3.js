function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f3(a4, a5, a6) {
    const v12 = {
        b: 129,
        [F0](a8, a9, a10, a11) {
        },
    };
    return v12;
}
f3();
gc({ execution: "async" });
f3();
