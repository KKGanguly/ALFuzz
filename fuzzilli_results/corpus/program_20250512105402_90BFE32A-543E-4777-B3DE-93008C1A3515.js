function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a3;
    this.a = 1;
}
const v5 = new F1();
const v6 = { ...v5 };
