function f0() {
    const v7 = {
        [-477.0449652012496]: -827412.7875717989,
        m(a5, a6) {
            return this;
        },
        ["getBigInt64"]: "getBigInt64",
        has: f0,
        [-827412.7875717989]: -477.0449652012496,
    };
    return "getBigInt64";
}
f0();
const v9 = [1000.0,-2.0,9.62939466678792,-544381.5621571868,-Infinity,0.5433718065333684,5.0,2.220446049250313e-16];
const v11 = { [42523n]: v9 };
function f12() {
    const v15 = ("// Copyright 2014 the V8 project authors. All rights reserved.").length;
    const v16 = {};
    var left = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    const v19 = new Object();
    var o2 = v19;
    global = v15;
    function f22(a23) {
        return global;
    }
    const v24 = f22();
    function f26() {
        return v24;
    }
    f22(this.__defineGetter__("global", f26));
    var right = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
    for (let i33 = 0; i33 < 100000; i33++) {
        var cons = left + right;
        var substring = cons.substring(20, 80);
        var index = substring.indexOf("Y");
    }
    const v49 = [0];
    const v51 = Array.concat;
    try { v51.call(v49); } catch (e) {}
    return f12;
}
f12();
