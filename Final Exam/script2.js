function numberOneTriangle(n) {
    if (n < 1 || n > 10) {
        console.log("Out - Of - Range");
        return;
    }
    for (let i = 1; i <= n; i++) {
        let num = "";
        for (let j = 1; j <= i; j++) {
            num += "*";
        }
        console.log(num);
    }
}

numberOneTriangle(10);

