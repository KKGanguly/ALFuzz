function f0() {
    const v6 = {
        ["boolean"]: -824.802444007038,
        set e(a4) {
            delete a4[127];
        },
    };
    return v6;
}
const v7 = f0();
const v8 = f0();
const v9 = f0();
v9[1] = v9;
const v10 = [6,536870912,16,5,-65535,512];
const v11 = [-1663484657,-4294967295];
const v12 = [-9223372036854775807,-9007199254740990,536870887,680928428];
function f13(a14, a15, a16) {
    const v20 = {
        valueOf(a18, a19) {
        },
        ...v10,
    };
    return v20;
}
const v21 = f13(v12, v10, v7);
v21[2] = v21;
f13(v9, v12, v7);
f13(f13, v11, v8);
function f24(a25, a26) {
    return a26;
}
Error.prepareStackTrace = f24;
try {
    const v28 = /(invalid regexp)/;
    const v29 = v28?.__defineSetter__;
    try { v29(v21, f13); } catch (e) {}
    throw Error(v28);
} catch(e32) {
    e32.stack[0].isNative();
}
