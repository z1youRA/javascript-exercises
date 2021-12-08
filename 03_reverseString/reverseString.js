const reverseString = function(str) {
    // return str.split("").reverse().join("");
    const strArr = str.split("");
    let reversedArr = [];
    for(let i = 0; i < strArr.length; i++) {
        reversedArr[i] = strArr[strArr.length - 1 - i];
    }
    const reversedStr = reversedArr.join("");
    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
