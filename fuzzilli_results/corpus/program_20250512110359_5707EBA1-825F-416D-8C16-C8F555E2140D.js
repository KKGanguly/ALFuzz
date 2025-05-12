function f1() {
    return f1;
}
f1.prototype = 255;
var y = 302663787453389 / 562949953421312;
const v7 = Math.tan(y);
Math.log();
const v10 = new Float64Array(255);
Symbol.species;
const v16 = [,];
v16[1] = 0;
v16[0] = 1;
global = 1;
const v22 = new Set();
const v25 = v22[Symbol.iterator]();
function f26() {
    return f26;
}
const t18 = v25.__proto__;
t18.next = f26;
const v28 = new Uint8ClampedArray(9);
const v33 = new Uint8ClampedArray(4);
v33[0] = 255;
v33[0];
new BigInt64Array(3);
Array.__proto__ = null;
([Array]).slice();
[9];
[v10,9,255];
const v43 = [9,v28,Float64Array];
class C44 {
    static {
        try {
            new BigInt64Array(v43);
        } catch(e47) {
        }
        super.h = Float64Array;
        const v48 = Math.imul;
        this.Worker;
        const v53 = [,0.1];
        const v56 = {
            valueOf() {
                v53.length = 0;
                return v53;
            },
        };
        var imul_func = v48;
        function imul_polyfill(a59, a60) {
            var ah = (a59 >>> 16) & 65535;
            var al = a59 & 65535;
            const v72 = (a60 >>> 16) & 65535;
            var bl = a60 & 65535;
            return ((al * bl) + ((((ah * bl) + (al * v72)) << 16) >>> 0)) | 0;
        }
        function TestMathImul(a88, a89, a90) {
            function imul_meth_closure(a92, a93) {
                return Math.imul(a92, a93);
            }
            function imul_func_closure(a96, a97) {
                return imul_func(a96, a97);
            }
            imul_polyfill(a89, a90);
            Math.imul(a89, a90);
            imul_func(a89, a90);
            imul_meth_closure(a89, a90);
            imul_func_closure(a89, a90);
            imul_func_closure(a89, a90);
            imul_func_closure(a89, a90);
        }
        TestMathImul(v7, -1, 8);
        TestMathImul(-5, 4294967295, 5);
        TestMathImul(7, true, 7);
        TestMathImul(302663787453389, 7);
        TestMathImul(1, true, true);
        TestMathImul(0, true, false);
        typeof getIgnitionDispatchCounters;
        let v131;
        try { v131 = getIgnitionDispatchCounters(); } catch (e) {}
        Math.exp(3);
        Math.log(2);
        Math.E;
        var old_dispatch_counters = v131;
        typeof old_dispatch_counters;
        try { Object.getOwnPropertyNames(old_dispatch_counters); } catch (e) {}
        for (const v142 in old_dispatch_counters) {
            var counters_row = old_dispatch_counters[v142];
            typeof counters_row;
            for (const v146 in counters_row) {
                typeof counters_row?.[v146];
            }
        }
        function f149(a150) {
            a150 * a150;
        }
        let v152;
        try { v152 = getIgnitionDispatchCounters(); } catch (e) {}
        try { v152.filter(v152, v152); } catch (e) {}
        function f154(a155) {
            var new_counters_row = v152;
            let v157;
            try { v157 = Object.getOwnPropertyNames(); } catch (e) {}
            var old_destination_bytecodes = v157;
            let v159;
            try { v159 = Object.getOwnPropertyNames(); } catch (e) {}
            var new_destination_bytecodes = v159;
            function f161(a162) {
            }
            try { old_destination_bytecodes.forEach(); } catch (e) {}
            function f165(a166) {
                const v167 = a155?.[a166];
                if (typeof v167 === "number") {
                    new_counters_row >= v167;
                }
            }
            return f149;
        }
        TestMathImul(0, undefined, 7);
        TestMathImul(0, -0, 7);
        TestMathImul(0, 7, -0);
        var left = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        var right = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
        for (let i191 = 0; i191 < 100000; i191++) {
            var cons = left + right;
            var substring = cons.substring(20, 80);
            var index = substring.indexOf("Y");
        }
        TestMathImul(0, 7, 0.9);
        TestMathImul(7, 1.1, 7);
    }
    static o(a216, a217) {
        try { Float64Array(255); } catch (e) {}
        return Uint8ClampedArray;
    }
}
new C44();
new C44();
new C44();
function f222(a223, a224, a225) {
    return a224;
}
f222.prototype;
function f227() {
    for (let v228 = 0; v228 < 5; v228++) {
        v228 < __v_5;
    }
    return f227;
}
this.Worker;
Worker.prototype = 12;
const v238 = new Worker("", { type: "string" });
v238.postMessage([]);
