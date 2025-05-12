new WeakSet();
const v9 = new WeakMap();
try { v9.delete("callee"); } catch (e) {}
let v11;
try { v11 = v9.set(23758, "40389"); } catch (e) {}
v11 ?? v11;
class C13 extends WeakSet {
    static #f = 23758;
    static #c;
    p(a15, a16, a17) {
        try {
            a16.#f |= v9;
        } catch(e18) {
        }
        return "40389";
    }
    static ["40389"];
    static [23758] = "callee";
}
const v19 = new C13();
try { v19.p("callee", v9, v19); } catch (e) {}
const v21 = new C13();
const v22 = v21?.constructor;
v22[40389] = v22;
try { new v22(); } catch (e) {}
new C13();
function f25(a26) {
    const v27 = a26 ?? a26;
    v27 ?? v27;
    try { arguments.callee(C13); } catch (e) {}
    const v31 = arguments[0];
    const v32 = v31 ?? v31;
    v32 ?? v32;
    return arguments;
}
const v34 = f25();
const v35 = v34?.callee;
try { new v35(C13); } catch (e) {}
v34.length;
