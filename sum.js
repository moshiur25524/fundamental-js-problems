const numbers = [43, 36, 98, 74, 24, 16, 97];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;

}
console.log(sum);

function arrayTotal(numbers) {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const total = arrayTotal([36, 42, 79, 83]);
console.log(total);