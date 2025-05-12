const v0 = [-1871730379,-6,-2147483647,2046660147,-11,-2147483649,40469,-2,2];
const v4 = [5,,];
function f6(a7, a8) {
}
const v10 = new Proxy(Array, { has: f6 });
v10[1] = v0;
Object.setPrototypeOf(v4, v10);
Array.prototype.lastIndexOf.call(v4);
