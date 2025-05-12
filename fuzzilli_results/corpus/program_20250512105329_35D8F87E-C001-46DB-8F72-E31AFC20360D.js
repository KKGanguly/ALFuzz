function f0(a1, a2) {
    return a1;
}
const v3 = new f0(f0, f0);
var a = v3;
const v7 = [,0.1];
const v17 = {
    valueOf() {
        v7.length = 0;
        let v12;
        try { v12 = getIgnitionDispatchCounters(); } catch (e) {}
        var old_dispatch_counters = v12;
        const v14 = {};
        const t4 = 5;
        t4.length = 0;
        return v12;
    },
};
Array.prototype.lastIndexOf.call(v7, 100, v17);
