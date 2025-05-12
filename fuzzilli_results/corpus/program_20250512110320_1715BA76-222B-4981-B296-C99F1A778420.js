const v4 = { execution: "async", type: "minor" };
function f5() {
}
Object.defineProperty(v4, "flavor", { get: f5 });
gc(v4);
const v7 = {};
const t6 = {};
t6.d = 1;
