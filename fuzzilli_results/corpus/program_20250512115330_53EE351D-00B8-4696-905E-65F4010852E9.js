const v6 = {
    m(a1, a2) {
        const v3 = %WasmStruct();
        let [,v4,v5] = v3;
        return v4;
    },
};
try { v6.m(); } catch (e) {}
