const sumAll = function(m, n) {
    if(m < 0 || n < 0)
        return `ERROR`;
    if(typeof m !== `number` || typeof n !== `number`)
        return `ERROR`;
    if(m > n) {
        const swap = n;
        n = m;
        m = swap;
    }
    let sum = 0;
    for(let i = m; i <= n; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
