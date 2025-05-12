function f0() {
    return f0;
}
const v1 = [f0];
for (let i3 = 0;
    i3 < v1.length;
    (() => {
        for (let i8 = 0; i8 < 1000000; i8++) {
        }
        i3++;
    })()) {
}
