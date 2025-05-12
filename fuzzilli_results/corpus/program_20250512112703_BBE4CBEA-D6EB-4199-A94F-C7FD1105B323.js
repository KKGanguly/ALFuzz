function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = this.constructor;
    try { new v4(); } catch (e) {}
    this.d = a3;
}
new F1(null);
const v7 = new F1(F1);
const v8 = new F1(v7);
v8.b = v8;
const v23 = {
    ...v7,
    get a() {
        for (const v22 in getIgnitionDispatchCounters) {
        }
        return Symbol;
    },
};
