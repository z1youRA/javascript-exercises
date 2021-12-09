const palindromes = function (str) {
    if(typeof str !== `string`) {
        return `ERROR`;
    }
    arr = str.split('');
    let char1 = '';
    let char2 = '';
    for(let i = 0; i < str.length / 2; i++) {
        char1 = arr[i];
        char2 = arr[arr.length - i - 1];
        if(char1 !== char2) {
            return false;
        }
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;
