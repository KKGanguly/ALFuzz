function f0(a1, a2) {
    return a2;
}
Error.prepareStackTrace = f0;
try {
    throw Error(/(invalid regexp)/);
} catch(e6) {
    const v7 = e6.stack;
    let v8;
    try { v8 = v7.toSorted(e6); } catch (e) {}
    v7.toString(e6, Error, v8, v7).lastIndexOf(v7);
}
