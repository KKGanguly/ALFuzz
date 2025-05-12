const v0 = [];
const v1 = [v0];
const v2 = [v0,v1];
const v3 = [v1,v0,v1,v0,v2];
class C4 {
    static get b() {
        const v10 = new SharedArrayBuffer(256, { maxByteLength: 256 });
        new DataView(v10);
        return v3;
    }
    static [v2] = v1;
    d = v3;
    [v1] = v2;
}
const v13 = new C4();
v13.d = v13;
const v14 = new C4();
const v15 = v14?.valueOf;
v15.name;
try { new v15(); } catch (e) {}
new C4();
("NaN").length;
("n")[0];
try { ("getHours").blink(); } catch (e) {}
let v25;
try { v25 = ("getHours").toLocaleUpperCase(); } catch (e) {}
v25[4];
let v27 = 8;
-(v27++);
-1854607530 & -1854607530;
-38823 - -38823;
-38823 - -38823;
const v36 = null ?? null;
v36 ?? v36;
const v39 = Math.imul;
v39.name = v39;
var imul_func = v39;
function imul_polyfill(a42, a43) {
    a43 >> a43;
    a42 | a42;
    a43 >> a43;
    const v48 = a42 >>> 16;
    v48 & v48;
    v48 + v48;
    var ah = v48 & 65535;
    ah - ah;
    const v56 = a42 & 65535;
    v56 === v56;
    var al = v56 + v56;
    16 - 16;
    const v62 = a43 >>> 16;
    -(~65535);
    const v66 = v62 & 65535;
    var bl = a43 & 65535;
    let v70 = al * bl;
    v70--;
    const v72 = ah * bl;
    const v73 = al * v66;
    v73 * v73;
    v73 - v73;
    const v76 = v72 + v73;
    const v78 = 16 - 16;
    v78 >>> v78;
    const v82 = (v76 << 16) >>> 0;
    v82 >>> v82;
    const v84 = v70 + v82;
    v84 & v84;
    let v86 = 0;
    v86--;
    const v88 = v86 % v86;
    v88 >> v88;
    return v84 | v86;
}
const v91 = imul_polyfill.name;
try { v91.codePointAt(v25); } catch (e) {}
function TestMathImul(a94, a95, a96) {
    a94++;
    a95 - a95;
    a96 - a96;
    a95--;
    a96 === a96;
    function imul_meth_closure(a103, a104) {
        a103 - a103;
        const v106 = a104 & a104;
        v106 - v106;
        return Math.imul(a103, a104);
    }
    function imul_func_closure(a110, a111) {
        a110 >>> a110;
        return imul_func(a110, a111);
    }
    const v114 = imul_polyfill(a95, a96);
    v114 >> v114;
    Math.imul(a95, a96);
    const v117 = imul_func(a95, a96);
    v117 / v117;
    const v119 = -v117;
    v119 + v119;
    imul_meth_closure(a95, a96);
    imul_meth_closure(a95, a96);
    const v123 = imul_func_closure(a95, a96);
    v123 - v123;
    const v125 = v123 - v123;
    v125 == v125;
    imul_func_closure(a95, a96);
    imul_func_closure(a95, a96);
}
2 == 2;
4 ^ 4;
TestMathImul(8, 2, 4);
const v136 = -8;
const v137 = v136 !== v136;
v137 || v137;
let v139 = 1;
v139--;
const v141 = -v139;
v141 * v141;
const v144 = TestMathImul(v136, v141, 8);
v144 ?? v144;
4 >>> 4;
~2;
TestMathImul(4, -2, -2);
const v155 = -5;
5 != 5;
const v159 = 5 | 5;
v159 >>> v159;
TestMathImul(v155, 4294967295, 5);
10 & 10;
const v164 = -10;
v164 - v164;
TestMathImul(v164, 4294967294, 5);
7 & 7;
let v172 = 7;
v172--;
const v175 = TestMathImul(0, v172, false);
v175 ?? v175;
false || false;
false && false;
!false;
const v183 = TestMathImul(0, false, false);
const v184 = v183 ?? v183;
v184 ?? v184;
let v186 = 7;
v186--;
TestMathImul(v186, true, 7);
TestMathImul(7, 7);
1 & 1;
