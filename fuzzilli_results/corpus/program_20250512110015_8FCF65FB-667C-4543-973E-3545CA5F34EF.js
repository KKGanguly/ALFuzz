function f1() {
    let v2 = undefined;
    let v3 = 0;
    for (let i5 = 0;
        i5 < 1791;
        (() => {
            this.z = 1;
            i5++;
        })()) {
        v3 += i5;
    }
    v2 = v3;
    return f1;
}
f1();
