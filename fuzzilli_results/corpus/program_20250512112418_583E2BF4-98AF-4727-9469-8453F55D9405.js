const v1 = [Array,Array,Array];
function f3(a4, a5) {
    a5 in a4;
}
const v8 = new Proxy(v1, { getOwnPropertyDescriptor: f3 });
v8.a = v8;
const v10 = new Proxy(Array, {});
Object.hasOwn(v10);
