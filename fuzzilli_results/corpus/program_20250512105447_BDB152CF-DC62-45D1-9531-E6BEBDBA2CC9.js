function f4(a5, a6, a7) {
    const v12 = {
        toString(a9, a10, a11) {
            return "4294967296";
        },
        [a6]: 7.971498879651238e+307,
    };
    return "sticky";
}
f4();
f4(-1.7976931348623157e+308, "4294967296");
f4(7.971498879651238e+307, "sticky");
const v17 = [0];
function f18(a19) {
    const v20 = {};
    Object.defineProperty(v20, a19, {});
    return v20;
}
const v25 = Symbol.species;
v17.constructor = { [v25]: f18 };
const v29 = Array.prototype.concat;
try { v29.call(v17); } catch (e) {}
