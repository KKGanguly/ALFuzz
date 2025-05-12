function f3(a4, a5) {
    for (const v9 in getIgnitionDispatchCounters) {
        for (const v10 in v9) {
        }
    }
}
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a15;
    this.a = f3;
}
new F13(-1000000000.0);
new F13(327.36068906388914);
function f21(a22) {
    const v24 = [];
    Array.prototype;
    v24[1] = 0;
    v24[2] = 2;
    function f29(a30, a31, a32) {
        Array.__proto__ = null;
        const v38 = [];
        v38[1] = 0;
        v38[2] = 2;
        function f41(a42, a43, a44) {
            const t24 = v38.__proto__;
            t24[0] = 1;
        }
        v38.forEach(f41);
    }
    v24.forEach(f29);
}
f21();
f21();
