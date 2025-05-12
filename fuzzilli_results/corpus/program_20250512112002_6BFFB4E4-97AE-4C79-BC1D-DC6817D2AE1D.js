const v0 = /(a)/myu;
const v2 = [-5,-268435456,-47983,1073741823,-4,949992706,268435456,536870888,-6,-4];
let v3;
try { v3 = v2.findIndex(false); } catch (e) {}
function f4(a5, a6) {
    const v12 = {
        n(a8, a9, a10) {
            return v0 instanceof a8;
        },
    };
    return v12;
}
const v13 = f4();
const v14 = f4(v3, v0);
try { v14.n(v2); } catch (e) {}
const v16 = f4(v13, v3);
try { v16.n(); } catch (e) {}
gc();
