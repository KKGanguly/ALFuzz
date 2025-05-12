function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1000.0;
    this.b = -774.7878474184196;
}
const v6 = new F2(1000.0, 1000.0);
const v8 = this.FinalizationRegistry;
try { new v8(); } catch (e) {}
const v14 = new Worker("", { type: "string" });
const v15 = [];
v15.push(v6);
v14.postMessage(v15);
