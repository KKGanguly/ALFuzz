[9,8139,"boolean"];
function f9(a10) {
    var sum = 0;
    for (let v14 = 0; v14 < 250; v14++) {
        sum += a10?.[a10];
        if (v14) {
            sum -= a10;
        }
    }
}
const v21 = new Int32Array(10);
v21.valueOf = f9;
f9();
f9(v21);
