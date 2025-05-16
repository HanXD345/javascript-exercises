const reverseString = function(str) {
    strAsArr = str.split('');
    reversed = strAsArr.reverse();
    return reversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
