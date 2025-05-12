const v0 = [2147483647,38124,-9007199254740991,-2,-1202891494,268435441,-39929,-36189,-28290];
const v1 = [2];
function f5(a6, a7, a8) {
    a8.unshift(a6);
    const v16 = {
        p(a11, a12, a13, a14) {
            v1.length = -1;
            return a12;
        },
    };
    return v16;
}
const v17 = f5(v0, "1073741825", v0);
try { v17.p(); } catch (e) {}
f5("1073741825", "W6", v1);
function F20(a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    a23[2] = a23;
}
new F20(F20, v0);
new F20("h", v1);
