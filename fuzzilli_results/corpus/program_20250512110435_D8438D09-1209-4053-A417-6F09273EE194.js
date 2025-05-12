function f0() {
    const v2 = {
        get a() {
            return this;
        },
    };
    return v2;
}
const v3 = f0();
class C4 {
    #d = f0;
    constructor(a6, a7) {
        try {
            v3.#d ^= a6;
        } catch(e8) {
        }
    }
}
const v9 = new C4();
new C4(v9, v3);
