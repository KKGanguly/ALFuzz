const v3 = [,0.1];
Object.defineProperty(v3, 0, { writable: true, value: "object" });
const v7 = {
    valueOf() {
        v3.length = 0;
        return this;
    },
};
Array.prototype.lastIndexOf.call(v3, 100, v7);
