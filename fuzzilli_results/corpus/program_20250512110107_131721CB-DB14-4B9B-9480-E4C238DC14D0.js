function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new Worker("", { type: "string" });
    v6.postMessage([]);
}
new F0();
new F0();
new F0();
