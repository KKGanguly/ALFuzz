const v2 = [,0.1];
const v6 = {
    valueOf() {
        v2.length = 0;
        return v2;
    },
};
Array.prototype.lastIndexOf.call(v2, 100, v6);
