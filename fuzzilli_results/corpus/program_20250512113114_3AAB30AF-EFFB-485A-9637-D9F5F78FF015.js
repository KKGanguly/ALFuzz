-57899 + -57899;
const v6 = [-9223372036854775808,4294967296];
const v7 = [257,3,-2147483648,1251456645,2,2];
const v8 = [16,11,-28948,1073741824,-9412,2,-30735,2147483647];
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    a12 ^ a12;
    a13[1] = a13;
    this.a = v6;
}
const v15 = new F9(v7, 763819475n, v6);
const v16 = new F9(v6, 763819475n, v8);
v16.a = v16;
new F9(v8, -25580n, v6);
const v19 = Math?.expm1;
try { new v19(v8); } catch (e) {}
const v21 = Math.imul;
try { v21.bind(v6); } catch (e) {}
var imul_func = v21;
try { imul_func.apply(763819475n, -12); } catch (e) {}
function imul_polyfill(a26, a27) {
    a26 + a26;
    var ah = (a26 >>> 16) & 65535;
    ah + ah;
    var al = a26 & 65535;
    const v41 = (a27 >>> 16) & 65535;
    -v41;
    let v44 = a27 & 65535;
    v44--;
    var bl = v44;
    const v47 = al * bl;
    const v52 = ((ah * bl) + (al * v41)) << 16;
    v52 ^ v52;
    0 / 0;
    const v56 = v52 >>> 0;
    v56 - v56;
    const v58 = v47 + v56;
    0 >>> 0;
    v58 | 0;
    return v52;
}
function TestMathImul(a63, a64, a65) {
    a65--;
    function imul_meth_closure(a68, a69) {
        a68 | a68;
        return Math.imul(a68, a69);
    }
    function imul_func_closure(a73, a74) {
        return imul_func(a73, a74);
    }
    try { imul_func_closure.apply(imul_meth_closure, a63); } catch (e) {}
    const v77 = imul_polyfill(a64, a65);
    Math.imul(a64, a65);
    const v79 = imul_func(a64, v77);
    v79 + v79;
    imul_meth_closure(a64, a65);
    imul_meth_closure(a64, a65);
    imul_func_closure(a64, a65);
    const v84 = imul_func_closure(a64, a65);
    v84 | v84;
    imul_func_closure(a64, a65);
}
try { new TestMathImul(-12, v15, v21); } catch (e) {}
4 * 4;
const v92 = TestMathImul(8, 2, 4);
v92 ?? v92;
const v95 = -8;
const v97 = -1;
let v98 = 8;
v98++;
const v100 = TestMathImul(v95, v97, v98);
v100 ?? v100;
-4;
const v105 = -2;
2 === 2;
const v109 = TestMathImul(4, v105, -2);
v109 ?? v109;
const v112 = -5;
v112 >>> v112;
4294967295 << 4294967295;
let v116 = 5;
v116++;
TestMathImul(v112, 4294967295, -12);
10 << 10;
const v121 = -10;
~v121;
4294967294 >>> 4294967294;
const v126 = TestMathImul(v121, 4294967294, 5);
v126 ?? v126;
-0;
7 - 7;
TestMathImul(0, 7, false);
TestMathImul(0, false, false);
7 - 7;
7 - 7;
TestMathImul(7, true, 7);
TestMathImul(7, 7);
true || true;
TestMathImul(1, true, true);
TestMathImul(0, false, true);
false || false;
const v160 = TestMathImul(0, true, false);
7 * 7;
TestMathImul(0, undefined, 7);
7 * 7;
TestMathImul(0, 7, undefined);
undefined ?? undefined;
TestMathImul(0, undefined, undefined);
0 ^ 0;
const v179 = -0;
v179 >> v179;
let v181 = 7;
v181++;
TestMathImul(0, v179, v181);
0 ^ 0;
0 + 0;
const v190 = TestMathImul(0, 7, -0);
v190 ?? v190;
TestMathImul(0, 0.1, 7);
TestMathImul(0, 7, 0.1);
0.9 & 0.9;
TestMathImul(0, 0.9, 7);
7 < 7;
0.9 ^ 0.9;
TestMathImul(0, 7, 0.9);
7 + 7;
TestMathImul(7, 1.1, 7);
TestMathImul(7, 7, 1.1);
1.9 * 1.9;
const v224 = TestMathImul(7, 1.9, 7);
v224 ?? v224;
1.9 << 1.9;
TestMathImul(7, 7, 1.9);
const v234 = TestMathImul(0, "str", 7);
v234 ?? v234;
TestMathImul(0, 7, "str");
const v241 = {};
v241.e = v241;
TestMathImul(0, v241, 7);
0 | 0;
const v247 = {};
v247.g = v247;
TestMathImul(0, 7, v247);
TestMathImul(0, [], 7);
let v255 = 0;
while (v255 < 3) {
    try { new imul_func(v160); } catch (e) {}
    let {"g":v259,} = v21;
    new Proxy(v15, { call: imul_polyfill, has: imul_polyfill, preventExtensions: TestMathImul });
    v255++;
}
const v264 = [];
try { v264.toSpliced(7, false); } catch (e) {}
1 - 1;
1 << 30;
var two_30 = 7;
TestMathImul(-two_30, two_30, 7);
TestMathImul(0, two_30, two_30);
TestMathImul(two_30, -two_30, 7);
TestMathImul(two_30, 7, -two_30);
TestMathImul(0, -two_30, -two_30);
var two_31 = 2 * two_30;
TestMathImul(-two_31, two_31, 7);
TestMathImul(-two_31, 7, two_31);
TestMathImul(0, two_31, two_31);
var max_val = two_31 - 1;
TestMathImul(two_31 - 7, 7, max_val);
var two_16 = 1 << 16;
TestMathImul(0, two_16, two_16);
-two_16;
two_16 - 1;
