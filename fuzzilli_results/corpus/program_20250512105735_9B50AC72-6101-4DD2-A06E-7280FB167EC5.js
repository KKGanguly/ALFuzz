function f1(a2, a3, a4) {
    function f6(a7) {
        return -15;
    }
    this.onmessage = f6;
    a2?.[9];
}
const v11 = [Worker,-15,"function"];
new Worker(f1, { arguments: v11, type: "function" });
