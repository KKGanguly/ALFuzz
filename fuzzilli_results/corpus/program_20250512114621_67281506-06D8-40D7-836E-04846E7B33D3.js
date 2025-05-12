const v3 = new BigInt64Array(1);
v3[0] = v3;
gc();
const t2 = 268435439n;
t2[0] = 268435439n;
const v6 = %WasmStruct();
