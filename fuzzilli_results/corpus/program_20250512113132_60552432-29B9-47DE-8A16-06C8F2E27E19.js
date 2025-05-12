const v2 = new Int8Array();
const v3 = %WasmStruct();
try { new v3(...v2, -268435456); } catch (e) {}
