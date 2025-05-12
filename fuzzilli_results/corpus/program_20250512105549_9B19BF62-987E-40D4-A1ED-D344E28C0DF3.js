function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -4294967297;
}
let v3 = 0;
[v3,v3,F0];
v3++;
const v6 = new F0();
delete v6.h;
