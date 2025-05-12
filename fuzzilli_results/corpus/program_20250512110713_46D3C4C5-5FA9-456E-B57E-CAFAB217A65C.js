for (let i2 = 0;
    i2 < 90;
    (() => {
        i2++;
        function f7() {
            return f7;
        }
        Reflect.get(Error(), "stack", 0);
    })()) {
}
