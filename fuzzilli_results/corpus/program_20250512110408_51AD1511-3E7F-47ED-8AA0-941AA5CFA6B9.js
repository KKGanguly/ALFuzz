class C3 {
    static #a = "callee";
    constructor(a5, a6) {
        try {
            a6.#a = this;
        } catch(e7) {
        }
    }
}
const v8 = new C3(1000000000.0, 1000000000.0);
new C3(v8, 1.7976931348623157e+308);
