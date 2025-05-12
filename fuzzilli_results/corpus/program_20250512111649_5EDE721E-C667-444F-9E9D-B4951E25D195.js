const v1 = /[YOa\b!]/myiv;
const v2 = /W(?:a?)+/sg;
const v3 = /(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)\10/mu;
const v5 = -5.454422566015753 === -5.454422566015753;
const v8 = [65537,74505566,57815,-60459,16,4096,-4096];
let v10 = ([536870889,1182052828,536870887,9007199254740990,-10,-7,8,6,268435441,4])[7];
v10--;
const v12 = [-375752331];
let v13;
try { v13 = v12.at(v3); } catch (e) {}
v13 - v13;
function f15(a16, a17, a18, a19) {
    a17.dotAll = a17;
    a18.e = a18;
    var imul_func = Math.imul;
    function imul_polyfill(a24, a25) {
        var ah = (a24 >>> 16) & 65535;
        var al = a24 ^ 65535;
        const v37 = (a25 >>> 16) & 65535;
        var bl = a25 & 65535;
        return ((al * bl) + ((((ah * bl) + (al * v37)) << 16) >>> 0)) | 0;
    }
    function TestMathImul(a53, a54, a55) {
        function imul_meth_closure(a57, a58) {
            return Math.imul(a57, a58);
        }
        function imul_func_closure(a61, a62) {
            return imul_func(a61, a62);
        }
        imul_polyfill(a54, a55);
        Math.imul(a54, a55);
        imul_func(a54, a55);
        imul_meth_closure(a54, a55);
        imul_func_closure(a54, a55);
    }
    TestMathImul(-8, -1, 8);
    TestMathImul(4, -2, +2);
    TestMathImul(0, 7, v5);
    TestMathImul(0, false, false);
    TestMathImul(1, v5, true);
    TestMathImul(0, true, false);
    TestMathImul(0, undefined, 7);
    TestMathImul(-2147483649, undefined, undefined);
    TestMathImul(0, 0.9, 7);
    TestMathImul(0, 7, -5.454422566015753);
    TestMathImul(7, 1.1, 7);
    TestMathImul(7, 7, 1.1, 7, v2, 7);
    TestMathImul(7, -5.454422566015753, 7);
    TestMathImul(7, 7, 1.9);
    TestMathImul(0, 7, "str");
    TestMathImul(0, 7, {});
    var two_30 = 1 << 30;
    TestMathImul(-two_30, two_30, 7);
    TestMathImul(0, two_30, two_30);
    -two_30;
    -a16;
    a17.flags = a17;
    a18.dotAll;
    const v156 = {
        m(a146, a147) {
            let v148;
            try { v148 = a16(a16); } catch (e) {}
            Math.log(2);
            function f152() {
                return f152;
            }
            Object.defineProperty(a16, v148, { configurable: true, value: v148 });
            Object.defineProperty(v1, 957, { enumerable: true, set: f15 });
            let [v153,v154,v155] = v8;
            return a147;
        },
        g: -2.220446049250313e-16,
        __proto__: a16,
        e: v12,
        [false]: v2,
        a: 1000000000000.0,
    };
    return v156;
}
const v157 = f15(1000000000000.0, v2, v2, -2.220446049250313e-16);
v157.b = v157;
f15(false, v1, v1, -5.454422566015753);
f15(f15, v2, v2, -5.454422566015753);
function f160(a161, a162) {
    a161 | a161;
    try { a162(); } catch (e) {}
    a162.prototype = a162;
    const v165 = a162();
    v165 ?? v165;
    a162();
    return a162;
}
function f168() {
    undefined ?? undefined;
    var result;
    result ?? result;
    let v173 = 0;
    for (let i177 = (() => {
            4294967295 >>> 4294967295;
            4294967295 - 4294967295;
            return 4294967295;
        })();
        i177 < 90;
        (() => {
            i177 != i177;
            const v182 = i177 >> i177;
            v182 >>> v182;
            -(i177++);
        })()) {
        v173 += i177;
    }
    result = v173;
}
const v188 = f160(4005, f168);
try { v188.call(v3); } catch (e) {}
v188.g = v188;
function f190() {
    let v191 = 0;
    v191 >>> v191;
    v191 - v191;
    for (let v194 = 0; v194 < 250; v194++) {
        v194 < 2;
        let v197 = 2;
        v197--;
        v191 = v197;
        const v199 = v194++;
        v199 != v199;
    }
    return v191;
}
f190.c = f190;
2 !== 2;
2 / 2;
f160(2, f190);
false["foo"];
function f208(a209) {
    arguments[0];
    return arguments;
}
f208();
