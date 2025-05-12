const v1 = { 4096: "unscopables" };
function f2(a3) {
    return v1;
}
const v4 = f2("unscopables");
v1[1] = f2;
const v5 = { ...v4 };
