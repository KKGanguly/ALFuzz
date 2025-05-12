function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = F0;
}
const v2 = new F0();
for (const v3 in v2) {
    for (const v4 in v3) {
    }
}
