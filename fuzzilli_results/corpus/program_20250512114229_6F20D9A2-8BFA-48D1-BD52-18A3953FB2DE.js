const v2 = new BigUint64Array(141);
const v4 = new Uint16Array(141, 141);
const v6 = /(?:ab)+(x)(x)(x)\2a\fb\nc\rd\te\vfdufoo(?<=bar)baz?/siv;
function f7(a8, a9, a10) {
    const v11 = { __proto__: v4, ...v2 };
    const t5 = v11.constructor;
    const v13 = new t5(a10);
    v13[80] = v13;
    return v11;
}
f7(v6, 129, 129);
const v16 = f7(Uint16Array, v6, f7)[14];
function f17(a18, a19) {
    try { a18(v16); } catch (e) {}
    let v21 = 0;
    const v22 = v21++;
    v22 >>> v22;
    return a18 | v21;
}
f17(v4);
function f26() {
    f17();
    const v28 = f17(v4, BigUint64Array);
    const v29 = f17();
    f17();
    f17(v28, v29);
    f17();
    f17();
    f17();
    const v35 = f17();
    f17();
    f17(v6, f26);
    f17();
    return f17(f17(v6, v35), BigUint64Array);
}
const t35 = f26.prototype.constructor;
t35();
f26();
f26();
