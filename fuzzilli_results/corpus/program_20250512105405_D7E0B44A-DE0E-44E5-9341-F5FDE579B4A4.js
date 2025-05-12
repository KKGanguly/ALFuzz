function f0() {
    const v29 = {
        __proto__: "toTimeString",
        h: -1000000000.0,
        [-2]: 1024,
        type: "toTimeString",
        self_: 1024,
        type: "toTimeString",
        type: "toTimeString",
        self_: 1024,
        b: "toTimeString",
        e: "toTimeString",
        g: "toTimeString",
        c: "toTimeString",
        m(a5, a6) {
            const v7 = typeof -1000000000.0;
            v7 === "function";
            %VerifyType(v7);
            let v10;
            try { v10 = a5(); } catch (e) {}
            super[v10] = "toTimeString";
            try {
                super.valueOf(-1000000000.0);
            } catch(e12) {
                const v15 = ["invalid",23];
                for (let i17 = 0; i17 < v15.length; i17++) {
                    try {
                        const v23 = v15[i17];
                        Error.prototype.toString.call(v23);
                    } catch(e28) {
                    }
                }
            }
            return v10;
        },
    };
    return v29;
}
const v30 = f0();
const v31 = f0();
const v32 = f0();
v32.e = v32;
function f33() {
    return v32;
}
function f34(a35, a36) {
    a35.c;
    const v46 = {
        __proto__: a36,
        get c() {
            this.g = this;
            new v30();
            f0();
            return v31;
        },
        set f(a43) {
            new Map();
        },
        a: a36,
        g: f33,
    };
    v46.h = v46;
    return v46;
}
const v47 = f0(v30, v32);
const v48 = f34(v32, v30);
v48.h = v48;
f34(v32, v30);
-2049594631n ^ -2049594631n;
const v54 = [f33,v30];
const v55 = [v32,v47];
try { v55.fill(f33); } catch (e) {}
[v55,f0,v48];
function f58(a59, a60) {
    try { a59(); } catch (e) {}
    try { a60.toString(); } catch (e) {}
    function f63() {
        const v64 = {};
        const v65 = {};
        function f66() {
        }
        const v68 = a60(this);
        v68 | v68;
        const v71 = new Error(Error);
        Reflect.get(v71, "stack", 0);
        return { fffffff: v68 };
    }
    return f63;
}
const v79 = f58(m, selfOf);
v55.name;
function selfOf(a82) {
    return ~a82.self_;
}
selfOf.d = selfOf;
function m() {
    return m;
}
const v89 = v79.apply({ self_: 3 })?.toLocaleString;
try { new v89(); } catch (e) {}
const v95 = {
    self_: 3,
    uuu: 4,
    uuu: 4,
    has: f33,
    valueOf() {
        v54.length = 0;
        return v54;
    },
};
v95.self_;
var left = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
var right = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
for (let i102 = 0; i102 < 100000; i102++) {
    var cons = left + right;
    var substring = cons.substring(20, 80);
    var index = substring.indexOf("Y");
}
v79.apply(3, selfOf);
