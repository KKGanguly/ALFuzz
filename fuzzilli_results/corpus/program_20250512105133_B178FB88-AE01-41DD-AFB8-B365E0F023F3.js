function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
new F0();
class C5 {
    static n(a7) {
    }
    818;
}
new C5();
function f13(a14, a15) {
}
function f19() {
    const v22 = new f13(1, 2);
    v22 + v22;
    const v24 = v22.x;
    v22.x;
    return v24;
}
function f26() {
    4 <= f13();
}
function f35() {
    f13();
    f13();
}
function f42() {
    f13() + f13;
}
function f47(a48, a49) {
    a49();
    a49();
}
f47(4, f19);
f47(22, f26);
f47(8, f35);
f47(4, f42);
