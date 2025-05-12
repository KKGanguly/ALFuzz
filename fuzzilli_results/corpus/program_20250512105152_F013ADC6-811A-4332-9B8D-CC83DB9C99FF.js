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
function f25(a26) {
    const v29 = [5,,];
    const v30 = [];
    function f31() {
        v30.push("HasProperty");
        return true;
    }
    function f35() {
        v30.push("Get");
    }
    const v39 = new Proxy(Array, { has: f31, get: f35 });
    Object.setPrototypeOf(v29, v39);
    Array.prototype.lastIndexOf.call(v29);
    ["HasProperty"];
    return v39;
}
const v46 = v21?.constructor;
v46[40389] = v46;
try { new v46(); } catch (e) {}
new C13();
function f49(a50) {
    const v51 = a50 ?? a50;
    v51 ?? v51;
    try { arguments.callee(C13); } catch (e) {}
    const v55 = arguments[0];
    const v56 = v55 ?? v55;
    v56 ?? v56;
    return arguments;
}
const v58 = f49();
const v59 = v58?.callee;
try { new v59(C13); } catch (e) {}
v58.length;
