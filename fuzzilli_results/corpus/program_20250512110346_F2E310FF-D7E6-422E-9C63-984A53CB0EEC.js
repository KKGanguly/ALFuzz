const v3 = [,0.1];
const v6 = {
    valueOf() {
        v3.length = 13;
        return this;
    },
};
Array.prototype.lastIndexOf.call(v3, 100, v6);
