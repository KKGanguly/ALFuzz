function f0() {
    return f0;
}
const v3 = [,];
const v10 = {
    valueOf() {
        const v6 = `
            f0 = "cause";
            const v7 = %WasmArray();
        `;
        return eval(v6);
    },
};
Array.prototype.lastIndexOf.call(v3, 100, v10);
