const repeatString = function(str, numberOfRepeats) {

    if (numberOfRepeats < 0) {
        return "ERROR"
    }

    fullStr = "";
    for (let i = 0; i < numberOfRepeats; i++) {
        fullStr += str;
    }
    return fullStr;
};

// Do not edit below this line
module.exports = repeatString;
