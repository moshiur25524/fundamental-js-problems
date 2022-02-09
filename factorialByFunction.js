function factorial(number) {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}
let firstFactorial = factorial(7);
console.log(firstFactorial);