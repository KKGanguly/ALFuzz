function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f3(a4) {
    const v11 = {
        [a4](a6, a7) {
            const v8 = a7.constructor;
            class C9 extends v8 {
                static #f = a6;
                [v8] = F0;
                static 8 = a4;
            }
            new C9();
        },
    };
    return v11;
}
class C12 extends f3 {
}
const v13 = new C12();
v13.undefined(F0, f3);
