function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = (10000).__proto__;
Object.defineProperty(v4, 9998, { __proto__: F0 });
