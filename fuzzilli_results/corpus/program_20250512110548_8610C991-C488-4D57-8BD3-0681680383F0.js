function f0() {
    const v4 = {
        4294967295: "umN",
        2147483648: -1000.0,
        b: f0,
        get a() {
        },
    };
    v4[4294967295];
    return v4;
}
const v6 = f0();
class C7 {
    [v6] = v6;
}
const v8 = new C7();
class C9 {
    constructor(a11, a12, a13) {
        const v14 = f0();
        function f15(a16, a17, a18) {
            function f19(a20, a21) {
                a20 % a20;
            }
            f19(a17, a18);
            f19();
        }
        f15();
        f15();
        f15();
        undefined ?? undefined;
        f15();
        f15();
        f15();
        const v33 = {};
        f15();
        const v35 = {};
        f15();
        [];
        f15();
        f15();
        f15();
        f15();
        f15();
        f15();
        function F44(a46, a47, a48) {
            if (!new.target) { throw 'must be called with new'; }
            a46.hasOwnProperty(v14);
        }
        new F44(v8);
    }
}
new C9();
new C9();
for (let v53 = 0; v53 < 5; v53++) {
}
