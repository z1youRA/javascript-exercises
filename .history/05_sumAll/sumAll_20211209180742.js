const sumAll = function(m, n) {
    if(m < 0 || n < 0)
        return `ERROR`;
    if(typeof m !== `number` || typeof n !== `number`)
        return `ERROR`;
    if(m > n) {
        const end = m;
        const start = n;
    }
    else {
        const end = n;
        const start = m;
    }
    let sum = 0;
    for(let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
