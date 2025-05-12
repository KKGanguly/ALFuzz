function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = {};
const t4 = {};
t4.h = F0;
Object.defineProperty({}, "h", { writable: true, configurable: true, value: v2 });
