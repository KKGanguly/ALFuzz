const v1 = new WeakSet();
let v3 = 6n;
const v4 = v3--;
v4 != v4;
16n ^ 16n;
function f8() {
    return f8;
}
const v10 = new Set();
class C11 {
    [WeakSet];
    static #a;
    set e(a13) {
        for (let v14 = 0; v14 < 5; v14++) {
            v1["p"] = v14;
        }
    }
    [v3] = v10;
    static #e = v10;
}
try { C11.toString(); } catch (e) {}
const v17 = new C11();
v17[6] = v17;
new C11();
const v19 = new C11();
const v20 = v19[6];
v20 ?? v20;
const v23 = new WeakMap();
try { v23.delete(v23); } catch (e) {}
const v25 = v23?.constructor;
let v26;
try { v26 = v25(); } catch (e) {}
try { v26.delete(9007199254740991n); } catch (e) {}
const v29 = new Error(Error);
const v30 = v29?.constructor;
v30.prototype = v30;
let v31;
try { v31 = v30(v17); } catch (e) {}
const v32 = v31?.constructor;
try { v32(v20); } catch (e) {}
Set >>>= Set;
const v35 = new C11(Set, Set, C11, ..."stack");
try { v35.isPrototypeOf(v19); } catch (e) {}
let v37;
try { v37 = f8(v23, v23, ..."stack", ...v17); } catch (e) {}
v37 ?? v37;
