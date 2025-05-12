const v2 = [0,1];
const v6 = Array().__proto__;
function f8() {
    return 9998;
}
Object.defineProperty(v6, 9998, { get: f8 });
Array.prototype.concat.call(v2);
