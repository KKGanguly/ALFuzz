class C3 {
    static 7;
    static #toString(a5, a6) {
        function f7() {
            function f9(a10) {
                const v11 = %WasmStruct();
            }
            this.onmessage = f9;
            Object.defineProperty(this, "d", { configurable: true, set: f9 });
        }
        const v13 = [];
        const v14 = { arguments: v13, type: f7 };
        new Worker(f7, v14);
        return v14;
    }
}
const v16 = new C3();
const v17 = new C3();
const v18 = new C3();
const v19 = [v18,v18];
const v20 = ["number",v19,"number","number",-4294967297];
const v21 = [v18,v17,v20,-2.220446049250313e-16];
function F22(a24, a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    try { a27.pop(); } catch (e) {}
    this.e = a24;
}
new F22(v16, v20, "number", v19);
new F22(v19, v21, v16, v20);
const v31 = new F22(C3, v19, v20, v21);
const v32 = v31?.constructor;
try { new v32(v20, v20, v20, F22); } catch (e) {}
function imul_polyfill(a36, a37) {
    var ah = (a36 >>> 16) & 65535;
    var al = a36 & 65535;
    const v49 = (a37 >>> 16) & 65535;
    var bl = a37 & 65535;
    return ((al * bl) + ((((ah * bl) + (al * v49)) << 16) >>> 0)) | 0;
}
try { Array.bind(-2.220446049250313e-16); } catch (e) {}
const v67 = Array.prototype.lastIndexOf;
v67.length;
let v69;
try { v69 = v67.call(null); } catch (e) {}
v69 ?? v69;
const v72 = Array.prototype.lastIndexOf;
v72.d = v72;
let v73;
try { v73 = v72.call(); } catch (e) {}
v73 ?? v73;
5 | 5;
const v79 = [5,,7];
v79[2];
function f81() {
    v79.length = 1;
    return 1;
}
const v83 = { valueOf: f81 };
v79.lastIndexOf(undefined, v83);
5 >>> 5;
const v88 = v79.lastIndexOf(5, v83);
v88 * v88;
5 + 5;
const v94 = [5,,];
function f95() {
    v94.length = 0;
    return 2;
}
const v98 = { valueOf: f95 };
function f100(a101, a102) {
    !(a102 in a101);
}
const v106 = new Proxy(Array, { has: f100 });
Object.setPrototypeOf(v94, v106);
const v110 = Array.prototype.lastIndexOf;
try { new v110(v73); } catch (e) {}
const v112 = v110.call(v94, undefined, v98);
v112 / v112;
