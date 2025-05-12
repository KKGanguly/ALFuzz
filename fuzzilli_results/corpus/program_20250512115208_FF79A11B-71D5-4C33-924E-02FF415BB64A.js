class C1 extends Uint8Array {
}
const v2 = new C1();
const v3 = [v2,v2];
const v6 = {
    valueOf() {
        try { this.valueOf(); } catch (e) {}
        return v3;
    },
};
v6.valueOf();
const v8 = v6.valueOf(C1);
try { v8.toSorted(v2); } catch (e) {}
const t13 = v6.valueOf;
t13();
