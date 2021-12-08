const repeatString = function(str, times) {
    if(times < 0)  
        return "ERROR";
    let repeatStr = '';
    for(let i = 0; i < times; i++) {
        repeatStr += str;
    }
    return repeatStr;
};

// Do not edit below this line
module.exports = repeatString;
