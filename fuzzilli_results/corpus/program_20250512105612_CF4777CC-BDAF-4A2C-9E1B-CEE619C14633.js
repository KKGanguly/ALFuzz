function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -11;
    this.b = -11;
    this.a = -11;
}
const v3 = new F0();
const v4 = { 2: F0, 2418187699: F0, __proto__: v3, ...v3 };
const v5 = [v3,v3,v3,v3,v3];
function f6(a7) {
    const v8 = [a7,f6];
    return v8 >>> v8;
}
const v11 = Symbol.species;
v5.constructor = { [v11]: f6 };
Array.prototype.concat.call(v5);
