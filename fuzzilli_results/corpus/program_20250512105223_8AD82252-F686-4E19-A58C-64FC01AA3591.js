class C3 {
    ["6Qmdz"] = "8";
}
const v5 = new C3();
v5.e = 47484;
const v6 = new C3();
function f7() {
    let v8 = %WasmStruct();
    return --v8;
}
v6.constructor = f7;
const v10 = v6.constructor;
try { v10(); } catch (e) {}
