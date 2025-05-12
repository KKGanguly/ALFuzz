const v3 = [3,10,3,3];
function f4(a5, a6, a7, a8) {
    const v20 = {
        b: v3,
        ...a7,
        __proto__: v3,
        n(a10, a11) {
            function F12(a14, a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
                this.a = 3;
                this.h = a7;
                this.g = a16;
            }
            new F12(this, v3);
            const v18 = new F12(a10, v3, 3);
            new F12(v18, a6, a10);
            return 1073741825;
        },
    };
    return v20;
}
f4(1073741825, 3, v3, 3);
f4(1073741825, v3, v3, 3);
f4(3, v3, v3);
function f25(a26, a27) {
    a27();
    try { getIgnitionDispatchCounters(); } catch (e) {}
    var old_destination_bytecodes = Object;
    try { old_destination_bytecodes.forEach(); } catch (e) {}
    return a27;
}
function f34() {
    new Set();
    const v39 = Symbol.iterator;
    function f40() {
    }
    const t36 = v39.__proto__;
    t36.next = f40;
    var result;
    let v43 = 0;
    for (let i45 = 0;
        (() => {
            function f46(a47) {
                arguments[0];
                return arguments;
            }
            f46();
            const v53 = [,];
            const v56 = {
                valueOf() {
                    v53.length = 0;
                    return v53;
                },
            };
            return i45 < 90;
        })();
        i45++) {
        v43 += i45;
        var x = 0;
        x.length;
        i45 < 2;
    }
    result = v43;
}
f25(4005, f34);
function f68() {
    for (let v69 = 0; v69 < 250; v69++) {
        v69++;
    }
}
f25(2, f68);
