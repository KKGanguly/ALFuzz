const v1 = new Map();
function f2() {
    return v1;
}
function F5(a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = this.constructor;
    try { new v10(f2, this, 8n); } catch (e) {}
    this.c = v1;
    this.b = a7;
    this.g = 9007199254740992;
}
const v12 = new F5();
const v13 = new F5(9007199254740992, v12, 9007199254740992);
new F5(v1, v1, v13);
