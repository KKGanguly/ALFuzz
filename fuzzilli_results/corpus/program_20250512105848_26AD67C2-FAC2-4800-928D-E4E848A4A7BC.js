for (let v1 = 0; v1 < 5; v1++) {
    try {
        Error.call(("invalid")[v1]);
    } catch(e5) {
    }
}
for (let i8 = 0; i8 < 1000000; i8++) {
}
const v14 = [,];
const v17 = {
    valueOf() {
        v14.length = 0;
        return 0;
    },
};
