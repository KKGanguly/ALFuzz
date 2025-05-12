function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new ArrayBuffer(255, { maxByteLength: 268435441 });
    const v8 = new BigUint64Array(v6);
    v8.toString();
}
new F0();
