const v1 = Array.prototype;
const v4 = Array(10000);
const v5 = v4.__proto__;
function f7() {
    return { ...v1 };
}
Object.defineProperty(v5, 9998, { get: f7 });
Array.prototype.lastIndexOf.call(v4);
