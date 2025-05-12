function f0(a1, a2) {
    return a2;
}
Error.prepareStackTrace = f0;
try {
    throw Error();
} catch(e5) {
    const v8 = e5.stack[0].getScriptNameOrSourceURL;
    try { v8(); } catch (e) {}
}
