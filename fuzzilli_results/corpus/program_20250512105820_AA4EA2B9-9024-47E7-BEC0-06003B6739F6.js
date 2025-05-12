const v0 = [];
function f1() {
    const v2 = { ...v0, __proto__: v0 };
    return v0;
}
f1();
f1();
