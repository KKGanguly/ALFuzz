const v4 = {
    ["function"]: 6,
    valueOf(a3) {
        return this;
    },
    g: 6,
    b: "function",
};
function f5(a6, a7) {
    return { ...v4, __proto__: v4 };
}
f5(f5("function", 6), "function");
