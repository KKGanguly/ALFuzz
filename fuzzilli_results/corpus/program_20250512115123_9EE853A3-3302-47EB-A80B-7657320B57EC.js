const v7 = {
    o(a1, a2, a3, a4) {
        return a2.__proto__.__proto__;
    },
};
v7.o(v7, v7);
