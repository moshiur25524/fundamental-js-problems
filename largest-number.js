function largeNumber(first, second) {
    if (first > second) {
        return first;
    }
    return second;
}
const larger = largeNumber(56, 64);
console.log(larger);

// write a function to find the largest number from three number

function findLargest(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}

const largest = findLargest(90, 56, 36);
console.log(largest);


// write a function to find the smallest number from three number

function findSmallest(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    else {
        return num3;
    }
}
const smallest = findSmallest(98, 297, 383);
console.log(smallest);