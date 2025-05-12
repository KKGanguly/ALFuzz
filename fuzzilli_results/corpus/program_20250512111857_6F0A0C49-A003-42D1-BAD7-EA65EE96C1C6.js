function C() {
}
const v9 = {
    valueOf(a2, a3, a4, a5) {
        function f6(a7) {
            return C;
        }
        return { [C]: f6 };
    },
};
const v10 = [v9,v9,v9,v9,v9];
function f11(a12) {
    v9 < 1000000;
}
const v16 = Symbol.species;
v10.constructor = { [v16]: f11 };
Array.prototype.concat.call(v10);
