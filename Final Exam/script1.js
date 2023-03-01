function Index(n) {
    for (i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
        if (n < 2) {
            return false;
        }
    }
    return true;
}
function sumIndex(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (Index(i)) {
            sum += i;
        }
    }
    return sum;
}
let a = 20;
let b = 50;
let sum = sumIndex(a,b);
console.log(`kết quả ${a} đến ${b} là ${sum}`);
