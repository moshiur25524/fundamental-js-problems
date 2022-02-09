
// const fibo = [0, 1];

// for (i = 2; i <= 10; i++) {
//     // nth = (n-1)th + (n-2)th;
//     // ith = (n-1)th + (n-2)th;
//     fibo[i] = fibo[i - 1] + fibo[i - 2];

// }
// console.log(fibo);

function fibonacciSeries(num) {
    const fibo = [0, 1];
    for (let i = 2; i < num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const fiboNumber = 8;
const fibonacci = fibonacciSeries(fiboNumber);
console.log(fibonacci);