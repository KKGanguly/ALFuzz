class C3 {
    constructor(a5) {
        ({"d":a5,} = a5);
    }
    ["toString"] = -1988145578;
}
const v9 = new C3(-1988145578);
("b").codePointAt();
function f16(a17, a18) {
    return a18;
}
Error.prepareStackTrace = f16;
try {
    const v20 = /(invalid regexp)/;
    try { v20.compile(v9); } catch (e) {}
    const v22 = Error();
    ({ __proto__: v20 }).e;
    throw v22;
} catch(e25) {
    const v26 = e25.stack;
    const v27 = v26[0];
    v27.isAsync();
    const v29 = v27.getThis(Error, e25);
    v29.toString(v29, v26, v26, v9, "37a");
}
