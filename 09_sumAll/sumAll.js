const sumAll = function(start, end) {
    if (start < 0 || end < 0 || typeof start !== "number" || typeof end !== "number") {
        return "ERROR";
    } else if (Math.round(start) - start !== 0 || Math.round(end) - end !== 0) {
        return "ERROR";
    } else if (start > end) {
        temp = start;
        start = end;
        end = temp;
    }

    let total = 0;

    for (let i = start; i <= end; i++) {
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
