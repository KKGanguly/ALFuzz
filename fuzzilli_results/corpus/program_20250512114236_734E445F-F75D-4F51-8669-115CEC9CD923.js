const v1 = [8];
v1.toJSON = v1;
function f2(a3, a4) {
    return a4;
}
const v7 = [v1];
new Worker(f2, { arguments: v7, type: "function" });
