function f0() {
    const v3 = {
        a: 9223372036854775807,
        get g() {
            return f0;
        },
    };
    return v3;
}
class C4 extends f0 {
    a;
}
new C4();
new C4();
