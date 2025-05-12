class C0 {
}
const v1 = new C0();
const v2 = v1.constructor;
new v2();
const v4 = new C0();
const v5 = new C0();
const t7 = v5.constructor;
new t7(v2);
const t9 = v1.constructor;
const v9 = new t9(v4);
const t11 = v5.constructor;
new t11(v1, v9, v5);
const v12 = { ...v1 };
