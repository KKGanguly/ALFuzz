class C0 {
    constructor(a2, a3, a4, a5) {
        const v8 = [,0.1];
        const v12 = {
            valueOf() {
                v8.length = 0;
                return 0;
            },
        };
        const v14 = Array.prototype;
        v14[0] = a5;
        v14.lastIndexOf.call(v8, 100, v12);
    }
}
const v17 = new C0(C0, C0, C0, C0);
new C0(v17, v17, v17, v17);
