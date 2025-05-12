function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -7;
}
const v3 = new F0();
for (const v4 in v3) {
}
