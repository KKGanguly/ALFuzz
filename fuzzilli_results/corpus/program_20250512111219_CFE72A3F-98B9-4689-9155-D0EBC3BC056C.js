function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -41490;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v5,v5,v5];
const v7 = [F0,v6];
const v8 = [v5];
class C9 extends F0 {
    static #g = v5;
    constructor(a11, a12, a13, a14) {
        super(C9, v7);
        const v15 = %WasmArray();
        try {
            this.#g;
        } catch(e17) {
        }
    }
    [v8];
    static c = v5;
    [v7] = v4;
}
const v18 = new C9(v3, v3, v3, v6, v3);
const v19 = new C9(v3, v4, v18, v18);
const v20 = new C9(v19, v5, v4, v8);
typeof getIgnitionDispatchCounters;
let v26;
try { v26 = getIgnitionDispatchCounters(); } catch (e) {}
var old_dispatch_counters = v26;
typeof old_dispatch_counters;
try { Object.getOwnPropertyNames(old_dispatch_counters); } catch (e) {}
for (const v32 in v20) {
    v6[v32];
    var e = v26;
    typeof e;
    for (const v36 in e) {
        typeof e?.[v36];
    }
}
function f39(a40) {
    a40 * a40;
}
let v42;
try { v42 = getIgnitionDispatchCounters(0); } catch (e) {}
try { v42.o(v42, v42); } catch (e) {}
function f44(a45) {
    var new_counters_row = v42;
    let v47;
    try { v47 = new_counters_row.getOwnPropertyNames(); } catch (e) {}
    var old_destination_bytecodes = v47;
    let v49;
    try { v49 = v5.getOwnPropertyNames(); } catch (e) {}
    var new_destination_bytecodes = v49;
    function f51(a52) {
    }
    try { old_destination_bytecodes.forEach(); } catch (e) {}
    function f55(a56) {
        const v57 = a45?.[a56];
        if (!(typeof v57 === "number")) {
            new_counters_row >= v57;
        }
    }
    return f39;
}
