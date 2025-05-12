function f1(a2, a3, a4) {
    return a4;
}
Worker.toJSON = -15;
const v7 = [Worker];
new Worker(f1, { arguments: v7, type: "function" });
