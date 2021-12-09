const removeFromArray = function(arr, ...arg) {
    for(const [index, i] of arr.entries()) {
        for(const j of arg) {
            if(i == j) {
                arr.splice(index, 0);
            }
        }
    }
};

// Do not edit below this line
module.exports = removeFromArray;
