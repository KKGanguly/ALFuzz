const v3 = new Uint8Array(16);
const t1 = "string";
delete t1[256];
let [,v5,,v6] = v3;
const v11 = {
    [Symbol]() {
        const v10 = {
            next() {
                return this;
            },
        };
    },
};
try { v6(); } catch (e) {}
Symbol(v6);
