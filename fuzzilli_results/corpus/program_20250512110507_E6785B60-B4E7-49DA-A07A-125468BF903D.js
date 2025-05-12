function f0() {
    const v6 = {
        valueOf(a4) {
            const v5 = %WasmStruct();
        },
    };
}
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
}
const v11 = new F7();
new F7(f0, v11);
var imul_func = Math.imul;
function f16(a17, a18) {
    const v22 = (a17 >>> 16) & 65535;
    const v24 = a17 & 65535;
    const v28 = (a18 >>> 16) & 65535;
    a18 & 65535;
    var bl = 16;
    v24 * bl;
    const v38 = (((v22 * bl) + (v24 * v28)) << 16) >>> 0;
    (65535 + v38) | v38;
}
function f41(a42, a43, a44) {
    function f45(a46, a47) {
        Math.imul(a46, a47);
    }
    function f49(a50, a51) {
        imul_func(a50, a51);
    }
    f16(a43, a44);
    Math.imul(a43);
    f0(a43, a44);
    f45();
    f45(a43, a44);
    f49(a43, a44);
    f49(a43, a44);
    f49(a43, a44);
}
f41();
f41(8, 1, 8);
f41(4, -2, -2);
f41();
f41();
f41();
f41();
f41();
f41();
f41();
f41();
f41();
f41();
f41();
f41(7);
f41(7, 1.9);
f41(7);
f41(0, "str");
f41(0, 7, "str");
f41(0, {}, 7);
f41(0, 7, {});
f41(0, [], 7);
f41(1, 1, 7);
f41(0, 1, 1);
f41(1, 1);
f41(1, 7, 1);
f41(0, 1, 1);
f41(1, 1, 7);
f41(1, 7, 1);
f41(0, 1, 1);
f41(-1, 1, 7);
f41(1, 1, 1);
f41();
