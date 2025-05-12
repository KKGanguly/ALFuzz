function f0() {
    const v2 = {
        get e() {
            return this;
        },
    };
    return v2;
}
class C4 extends f0 {
    #b = 0.6024674882379228;
}
new C4();
new C4();
new C4();
