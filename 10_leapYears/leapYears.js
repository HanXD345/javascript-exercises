const leapYears = function(year) {
    let leapYear = false;
    if (year % 4 === 0) {
        if (year % 400 === 0) {
            leapYear = true
        } else if (year % 100 === 0) {
            leapYear = false
        } else {
            leapYear = true
        }
    };

    return leapYear
};

// Do not edit below this line
module.exports = leapYears;
