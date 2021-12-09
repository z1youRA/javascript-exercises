const removeFromArray = function(arr, num) {
    let arg = [...arguments];
    arg.shift();
    for(const [index, i] of arr.entries()) {
        for(const j of arg) {
            if(i == j) {
                arr.splice(index, 0);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
