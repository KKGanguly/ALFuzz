let v1 = 244.7204484796796;
class C3 {
    #d;
    1112312035;
    static {
        try {
        const t0 = 257;
        t0();
        } catch (e) {}
        super[257];
        let v7 = -4294967297;
        this ** v1;
        const v9 = --v7;
        v1++;
        !v9;
    }
}
const v12 = new C3();
const v13 = new C3();
const v14 = new C3();
function f15(a16, a17, a18) {
    const v25 = {
        1437479540: "C",
        d: v14,
        ...a16,
        o(a20, a21) {
            const v22 = %WasmArray();
            while (0) {
                let {...v24} = a17;
            }
            return 257;
        },
    };
    return v25;
}
const v26 = f15(v13, "C", v14);
const v28 = f15(f15(C3, v12, v26), C3, v12);
typeof getIgnitionDispatchCounters;
let v31;
try { v31 = getIgnitionDispatchCounters(); } catch (e) {}
var old_dispatch_counters = v31;
typeof old_dispatch_counters;
try { Object.getOwnPropertyNames(old_dispatch_counters); } catch (e) {}
for (const v36 in old_dispatch_counters) {
    var counters_row = old_dispatch_counters[v36];
    typeof counters_row;
    for (const v40 in counters_row) {
        typeof counters_row?.[v40];
    }
}
function f43(a44) {
    return a44;
}
let v45;
try { v45 = getIgnitionDispatchCounters(); } catch (e) {}
try { v45.filter(v45, v45); } catch (e) {}
function f47(a48) {
    var new_counters_row = v45;
    let v50;
    try { v50 = Object.getOwnPropertyNames(); } catch (e) {}
    var old_destination_bytecodes = v50;
    let v52;
    try { v52 = Object.getOwnPropertyNames(); } catch (e) {}
    var new_destination_bytecodes = v52;
    function f54(a55) {
        return a55;
    }
    try { old_destination_bytecodes.forEach(v52, v45); } catch (e) {}
    function f57(a58) {
        const v59 = a48[a58];
        v59 === "number";
        new_counters_row >= v59;
        const v63 = ["number","number","number","number","number"];
        [v26,v63,v63];
        [v28];
        const v67 = Symbol.dispose;
        const v69 = {
            [v67]() {
            },
        };
        using v70 = v69;
        return v69;
    }
    return f54;
}
