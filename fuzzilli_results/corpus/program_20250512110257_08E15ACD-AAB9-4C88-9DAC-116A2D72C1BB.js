const v5 = { execution: "async", type: "minor" };
function f6() {
    return 1;
}
Object.defineProperty(v5, "flavor", { get: f6 });
gc(v5);
const t6 = {};
t6.d = 1;
