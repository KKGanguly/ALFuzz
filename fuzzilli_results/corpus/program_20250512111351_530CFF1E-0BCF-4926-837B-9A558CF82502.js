function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this?.constructor;
    try { new v6(); } catch (e) {}
    a5 << a5;
    this.d = -1000000000.0;
}
const v9 = new F3(F3);
let v10 = new F3(1.0666473823339618e+308);
const v11 = v10.constructor;
try { new v11(v9, v11, v11, -3.0); } catch (e) {}
const v13 = `
    v10 ||= v10;
`;
