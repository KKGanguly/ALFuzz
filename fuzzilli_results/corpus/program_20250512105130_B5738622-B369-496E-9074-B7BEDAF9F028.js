typeof getIgnitionDispatchCounters;
let v2;
try { v2 = getIgnitionDispatchCounters(); } catch (e) {}
var old_dispatch_counters = v2;
typeof old_dispatch_counters;
try { Object.getOwnPropertyNames(old_dispatch_counters); } catch (e) {}
for (const v8 in old_dispatch_counters) {
    var counters_row = old_dispatch_counters[v8];
    typeof counters_row;
    for (const v12 in counters_row) {
        typeof counters_row?.[v12];
    }
}
function f15(a16) {
    a16 * a16;
}
let v18;
try { v18 = getIgnitionDispatchCounters(); } catch (e) {}
try { v18.filter(v18, v18); } catch (e) {}
function f20(a21) {
    var new_counters_row = v18;
    let v23;
    try { v23 = Object.getOwnPropertyNames(); } catch (e) {}
    var old_destination_bytecodes = v23;
    let v25;
    try { v25 = Object.getOwnPropertyNames(); } catch (e) {}
    var new_destination_bytecodes = v25;
    function f27(a28) {
    }
    try { old_destination_bytecodes.forEach(); } catch (e) {}
    function f31(a32) {
        const v33 = a21?.[a32];
        if (typeof v33 === "number") {
            new_counters_row >= v33;
        }
    }
    return f15;
}
