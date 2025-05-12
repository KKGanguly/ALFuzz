function f6(a7, a8) {
    const v31 = {
        c: a7,
        ..."length",
        e: a8,
        g: -9.80556638044823,
        f: -800586.3212309576,
        [a7]: a8,
        __proto__: a7,
        ["length"]: "function",
        h: a7,
        [a7](a10, a11, a12) {
            const v16 = a12--;
            Math.exp(v16);
            this ^ v16;
            const v19 = {};
            const v22 = [,0.1];
            const v26 = {
                valueOf() {
                    v22.length = 0;
                    return v22;
                },
            };
            Array.prototype.lastIndexOf.call(v22, 100, v26);
            return -12;
        },
    };
    return v31;
}
const v32 = f6("length", -800586.3212309576);
const v33 = f6("function", -9.80556638044823);
const v34 = f6("function", -800586.3212309576);
function f35(a36, a37, a38) {
    for (let [v39] of "match") {
        const v40 = v39 || f6;
        const v42 = [["length"],v40,f35,a36];
        [v42,v42,a38,v42];
        +v42;
    }
    delete v34[a36];
    ("function")["concat"]("concat", a36, 2.0);
    const v64 = {
        [-800586.3212309576]: a38,
        __proto__: "function",
        b: -800586.3212309576,
        f: "concat",
        a: "match",
        [f35]: 2.0,
        128: "function",
        b: v32,
        c: a36,
        n(a52, a53) {
            let [,v54] = "length";
            super[v54];
            return "length";
        },
        f: "length",
        ["length"](a57, a58, a59) {
            this[a36 <= -2719] = a37;
            return f6;
        },
    };
    return v64;
}
f35(v32, "length", v32);
const v66 = f35(v32, "length", v33);
f35(v34, "length", v33);
function RunOneTruncationTest(a72, a73) {
    a72 | 0;
}
function f76() {
    RunOneTruncationTest();
    RunOneTruncationTest();
    RunOneTruncationTest();
    RunOneTruncationTest();
    RunOneTruncationTest();
    -1;
    const v94 = RunOneTruncationTest();
    -4503601774854143;
    v32.g = "length";
    f35(v94, f6, v66);
    %PrepareFunctionForOptimization(f35);
    f35(v94, f6, v66);
    f35(v94, f6, v66);
    %OptimizeFunctionOnNextCall(f35);
    f35(v94, f6, v66);
    RunOneTruncationTest();
    -2;
    -9007207844675582;
    -536870912;
    RunOneTruncationTest();
    -536870912;
    RunOneTruncationTest();
    RunOneTruncationTest();
    RunOneTruncationTest();
    RunOneTruncationTest();
    RunOneTruncationTest();
    -4.835707890144534e+24;
    RunOneTruncationTest();
    Array.prototype;
    function Test() {
        var left = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        var right = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
        for (let i145 = 0; i145 < 100000; i145++) {
            var cons = left + right;
            var substring = cons.substring(20, 80);
            var index = substring.indexOf("Y");
        }
    }
    Test();
    RunOneTruncationTest();
}
f76();
f76();
