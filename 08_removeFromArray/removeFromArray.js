const removeFromArray = function(arr, ...args) {
    filteredArr = arr
    for (let arg of args) {
        filteredArr = filteredArr.filter((item) => item !== arg)
    }
    return filteredArr
};

// Do not edit below this line
module.exports = removeFromArray;
