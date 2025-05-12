function f3() {
    return 1;
}
try { f3(); } catch (e) {}
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = this?.constructor;
    try { new v9(this, a8); } catch (e) {}
    -a8;
    this.d = a8;
    this.g = a7;
    this.b = a8;
}
new F5(-7, 6);
const v13 = new F5(-7, -7);
const v14 = new F5(1, 1);
v14.d = v14;
const v15 = [v14,-7];
v15[1];
typeof getIgnitionDispatchCounters;
let v19;
try { v19 = getIgnitionDispatchCounters(); } catch (e) {}
var old_dispatch_counters = v19;
typeof old_dispatch_counters;
try { Object.getOwnPropertyNames(old_dispatch_counters); } catch (e) {}
for (const v25 in old_dispatch_counters) {
    var counters_row = old_dispatch_counters[v25];
    typeof counters_row;
    for (const v29 in counters_row) {
        typeof counters_row?.[v29];
    }
}
function f32(a33) {
    a33 * a33;
}
let v35;
try { v35 = getIgnitionDispatchCounters(); } catch (e) {}
try { v35.filter(v35, v35); } catch (e) {}
function f37(a38) {
    var new_counters_row = v35;
    let v40;
    try { v40 = Object.getOwnPropertyNames(); } catch (e) {}
    var old_destination_bytecodes = v40;
    let v42;
    try { v42 = Object.getOwnPropertyNames(); } catch (e) {}
    var new_destination_bytecodes = v42;
    function f44(a45) {
    }
    try { old_destination_bytecodes.forEach(); } catch (e) {}
    function f48(a49) {
        const v50 = a38?.[a49];
        if (typeof v50 === "number") {
            new_counters_row >= v50;
        }
    }
    return f32;
}
const v55 = [v15];
[v55,6,f3,v55];
class C57 {
    get g() {
        new v14();
        function f61() {
            return v15;
        }
        return v14;
    }
    #d = 1;
    static #b = 1;
    [v13];
}
new C57();
new f3();
const v65 = new C57();
const v66 = v65?.constructor;
try { new v66(); } catch (e) {}
function f68(a69) {
    const v71 = [,,];
    v71[1] = 0;
    2 / 2;
    const t79 = 2;
    t79[2] = 2;
    function f75(a76, a77, a78) {
        a77 >>> a77;
        a78[1] = a78;
        const v80 = (-7).__proto__;
        try { v80.toPrecision(a69); } catch (e) {}
        v80[0] = 1;
        return a78;
    }
    v71.forEach(f75);
    return a69;
}
const v84 = f68();
v84 ?? v84;
const v86 = f68();
v86 ?? v86;
const v88 = f68(v86);
v88 ?? v88;
f68(v86);
