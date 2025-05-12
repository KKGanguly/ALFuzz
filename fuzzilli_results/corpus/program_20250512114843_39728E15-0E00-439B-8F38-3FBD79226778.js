const v3 = [5,,7];
function f4() {
    return 5;
}
Object.defineProperty(v3, 1, { get: f4 });
function f5() {
    v3.length = 1;
    return 1;
}
const v7 = { valueOf: f5 };
v3.lastIndexOf(undefined, v7);
v3.lastIndexOf(5, v7);
