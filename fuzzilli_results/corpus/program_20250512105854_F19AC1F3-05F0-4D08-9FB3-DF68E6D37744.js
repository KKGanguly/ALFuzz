class C9 {
    constructor(a11, a12, a13, a14) {
        a11[1024] = a11;
    }
}
try { new C9(978620.4669526764); } catch (e) {}
function f19(a20) {
    Object.defineProperty(arguments, 0, { enumerable: true, value: arguments });
    return arguments;
}
