function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 3;
    this.f = 536870912;
}
const v6 = new F3(3);
v6.e = v6;
const v7 = new F3(3);
const v8 = v7?.__defineSetter__;
try { new v8(3, 536870912); } catch (e) {}
const v10 = new F3(-41295);
v10.b = v10;
const v11 = %WasmArray();
try { ("W").split(v7, v11); } catch (e) {}
let v19;
try { v19 = v11("16", v7); } catch (e) {}
v19 ?? v19;
try { v11.tan("undefined"); } catch (e) {}
const v22 = %WasmStruct();
try { this.SyntaxError(v6); } catch (e) {}
const v28 = this.Worker;
v28.d = v28;
let v29 = 12;
const t23 = "16";
t23.toString = v22;
let v31 = -65536;
v31--;
let v33 = -12;
v33 - v33;
({"E":F3,"a":v29,"g":v33,} = Math);
const v39 = new Worker("", { type: "string" });
try { v39.getMessage(); } catch (e) {}
v39.postMessage([]);
