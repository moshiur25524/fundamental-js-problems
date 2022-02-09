function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}
let myYear = 2056;
let LeapYear = isLeapYear(myYear);
console.log(LeapYear);