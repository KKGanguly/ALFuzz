/4(?<a>.)\k<a>[\c~]/myig;
/mYxyz{1,}a[^a][[]?]/msyigv;
function f7(a8, a9) {
    a8.message = a8;
    return a9;
}
Error.prepareStackTrace = f7;
try {
    throw Error();
} catch(e12) {
    const v15 = e12.stack[0].getThis();
    try { v15.decodeURIComponent(e12); } catch (e) {}
}
