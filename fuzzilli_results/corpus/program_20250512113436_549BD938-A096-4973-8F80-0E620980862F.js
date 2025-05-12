function f1() {
    return f1;
}
class C2 extends f1 {
    constructor(a4, a5, a6, a7) {
        super();
        function f8(a9) {
            return a9;
        }
        new Worker(f8, { type: "function" });
    }
}
const v14 = new C2(C2, f1, f1, C2);
new C2(C2, v14, -1024, -1024);
new C2(v14, v14, C2, f1);
