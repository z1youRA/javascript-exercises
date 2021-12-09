const removeFromArray = function(arr) {
    arg = [...arguments];
    arg.shift();
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arg.length; j++) {
            if(arr[i] === arg[j]) {
                arr.splice(i, 1);
                i--;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
