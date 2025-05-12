const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v0;
}
const v3 = new F1();
const v4 = new F1();
class C5 extends F1 {
    28 = v4;
    [v0] = v3;
    496437662;
}
const v6 = new C5();
function f8() {
    return F1;
}
function f9(a10, a11, a12) {
    this[2147483647] ||= -1024;
    return F1;
}
const v16 = [f8,v6];
new Worker(f9, { arguments: v16, type: "function" });
