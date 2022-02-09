function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        // console.log(element);
        if (element > largest) {
            largest = element;
        }

    }
    return largest;

}
const ages = [25, 38, 91, 84, 65, 73];
const oldest = largestElement(ages);
console.log('oldest', oldest);

// smallest number from an array

function findSmallestNumber(numbers) {
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest
}
const numbers = [214, 326, 84, 90, 75, 83]
const smallestNumber = findSmallestNumber(numbers);
console.log('smallest number', smallestNumber);