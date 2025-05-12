function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    a4 % a4;
    a5--;
    try { this(this, a7, a4, a5, -4096n); } catch (e) {}
}
new F2(127, -4096n);
let v13 = 1;
v13--;
Math.exp(v13);
