function isEven(numbers) {
    if (numbers % 2 == 0) {
        return true;
    }
    return false;

}
let isEvenNumber = isEven(346);
console.log(isEvenNumber);

// is odd function

function isOdd(numbers) {
    if (numbers % 2 != 0) {
        return true;
    }
    return false;
}
let number = 2661;
let isOddNumber = isOdd(number);
console.log(isOddNumber);