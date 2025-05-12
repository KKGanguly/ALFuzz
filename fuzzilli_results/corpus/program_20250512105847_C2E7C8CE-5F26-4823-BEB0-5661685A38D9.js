for (let i = 0; i < 25; i++) {
    function f1(a2, a3) {
    }
    function f7() {
        const v8 = new f1();
        v8.x = 5;
    }
    function f10(a11, a12) {
        a12();
    }
    f10(22, f7);
}
