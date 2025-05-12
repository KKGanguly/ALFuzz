function f7() {
    function f8(a9, a10) {
        try { a10.every(f8, a9); } catch (e) {}
        return a10;
    }
    Error.prepareStackTrace = f8;
    try {
        throw Error();
    } catch(e14) {
        const v16 = e14.stack[0];
        v16.getPosition();
        v16.getThis(Error, Array).printErr();
    }
    var result;
    for (let i23 = 0;
        90 - 90, i23;
        (() => {
            const v27 = i23++;
            v27 % v27;
        })()) {
    }
    return Array;
}
f7();
f7();
