class C3 {
    #toString(a5) {
        return this;
    }
    static p(a7, a8) {
        const v10 = Symbol.iterator;
        const v19 = {
            [v10]() {
                let v12 = 10;
                const v18 = {
                    next() {
                        v12--;
                        const v16 = v12 == 0;
                        return { done: v16, value: v12 };
                    },
                };
                return v18;
            },
        };
        return -370643.88739356026;
    }
}
const v20 = new C3();
new C3();
const v22 = new C3();
function f26(a27, a28, a29) {
    const v38 = {
        [v20](a31, a32, a33, a34) {
            const v35 = [a31,C3];
            [a27,v35,a28,v35];
            return [a29,v22,8.863616598529778e+307];
        },
        536870888: a27,
        14: 37433n,
        2: a28,
        d: a28,
        f: a27,
    };
    return v38;
}
f26("0", -41589830n, 37433n);
f26(f26(v22, -41589830n, -41589830n), -4294967295n, -41589830n);
typeof getIgnitionDispatchCounters;
let v44;
try { v44 = getIgnitionDispatchCounters(); } catch (e) {}
var old_dispatch_counters = v44;
typeof old_dispatch_counters;
try { Object.getOwnPropertyNames(old_dispatch_counters); } catch (e) {}
for (const v49 in old_dispatch_counters) {
    var counters_row = old_dispatch_counters[v49];
    typeof counters_row;
    for (const v53 in counters_row) {
        typeof counters_row?.[v53];
    }
}
function f56(a57) {
    a57 * a57;
}
let v59;
try { v59 = getIgnitionDispatchCounters(); } catch (e) {}
try { v59.filter(v59, v59); } catch (e) {}
function f61(a62) {
    var new_counters_row = v59;
    let v64;
    try { v64 = Object.getOwnPropertyNames(); } catch (e) {}
    var old_destination_bytecodes = v64;
    let v66;
    try { v66 = Object.getOwnPropertyNames(); } catch (e) {}
    var new_destination_bytecodes = v66;
    function f68(a69) {
    }
    try { old_destination_bytecodes.forEach(); } catch (e) {}
    function f71(a72) {
        const v73 = a62?.[a72];
        if (typeof v73 === "number") {
            new_counters_row >= v73;
        }
    }
}
